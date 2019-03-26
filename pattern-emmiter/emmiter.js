// Learning pattern emmitter in javascript 

class eventEmmiter {
    constructor() {
        this.events = {};
        console.log(":this is a constructor");
    }

    emit(eventName, data) {
        const event = this.events[eventName];
        console.log(event, ":value of param event");
        console.log(data, ":value of param data");
        if (event) {
            console.log(event, ":value of event");
            event.forEach(fucktionElm => {
                fucktionElm.call(null, data);
            });
        }
    }

    subscribe(eventName, fucktionElm) {
        console.log(eventName, ":value eventName");
        console.log(fucktionElm, ":value function element");
        if (!this.events[eventName]) {
            console.log("if no events here");
            this.events[eventName] = [];
        }
        this.events[eventName].push(fucktionElm);
        return () => {
            this.events[eventName] = this.events[eventName].filter(eventFn => fucktionElm !== eventFn);
        }
    }
}

document.addEventListener('DOMContentLoaded', function (event) {
    let input = document.querySelector('input[type="text"]');
    let button = document.querySelector('button');
    let result = document.querySelector('.result');

    button.addEventListener('click', function () {
        console.log("click button");
        var valueEmmiter = emmiter.emit('event:name-changed', { name: input.value });
        console.log(valueEmmiter, ":Value Emitter");
        emmiter.emit('event:name-changed', { name: input.value });
    });

    let emmiter = new eventEmmiter();
    emmiter.subscribe('event:name-changed', data => {
        result.innerHTML = `<br><strong>value of input : ${data.name}</strong>`;
    });
});