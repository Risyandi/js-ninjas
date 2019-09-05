class contentComponent {
    constructor(name) {
        this.name = name;
    }

    get element() {
        return this.generateElement;
    }

    generateElement() {
        let element = document.createElement('div');
        element.className = "content-component-wrapper";
        element.innerHTML = `
        <div class="content-component">
            <img src="">
            <p>${this.name}</p>s
            <p>Description Article</p>
            <p>content Article</p>
        </div>
        `;

        return element;
    }
}

export default contentComponent;