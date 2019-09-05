class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat() {
        return `${this.name} is eat`;
    }

    sleep() {
        return `${this.name} is sleep`;
    }

    wakeUp() {
        return `${this.name} is wakeup`;
    }
}

class Gorilla extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }

    climbTree() {
        return `${this.name} is climb tree`;
    }

    poundChest() {
        return `${this.name} is pound chest`;
    }

    showVigour() {
        return `${super.eat()} and ${this.poundChest()}`;
    }

    dailyRoutine() {
        return `${super.wakeUp()} ${this.climbTree()} and ${super.sleep()}`;
    }
}

function display(content) {
    console.log(content);
}

const gorilla = new Gorilla('George', '160Kg');
display(gorilla.poundChest());
display(gorilla.sleep());
display(gorilla.showVigour());
display(gorilla.dailyRoutine());