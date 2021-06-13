class List extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }
    static get observedAttributes() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        const template = `
                                <tr >
                                    <td>${this.id} </td>
                                    <td id="nametd">${this.name} </td>
                                    <td id="emailtd">${this.email}</td>
                                    <td id="agetd">${this.age}</td>
                                    <td>
                                        <button id="updateData"onclick="import('./index.js').then(e => e.update('${this.id}'))">UPDATE</button>
                                        <button id="deleteData" onclick="import('./index.js').then(e => e.remove('${this.id}'))">DELETE</button>
                                    </td>
                                </tr>

          `;
        this.shadow.innerHTML = template;

    }

    get id() {
        return this.getAttribute("id");
    }

    set id(val) {
        this.setAttribute("id", val);
    }

    get name() {
        return this.getAttribute("name");
    }

    set name(val) {
        this.setAttribute("name", val);
    }

    get email() {
        return this.getAttribute("email");
    }

    set email(val) {
        this.setAttribute("email", val);
    }

    get age() {
        return this.getAttribute("age");
    }

    set age(val) {
        this.setAttribute("age", val);
    }
}
// export module
window.customElements.define("list-data", List);