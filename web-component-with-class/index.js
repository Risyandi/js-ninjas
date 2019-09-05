class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>this is component</h1>`;
    }
}

customElements.define('my-component', MyComponent);