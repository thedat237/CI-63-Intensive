

class CustomInput extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }

    static get observedAttributes(){

    }

    attributeChangedCallback(name, oldValue, newValue){}

    connectedCallback(){
       


        const template =`
        <style>
        .form-input {
            width: 89%;
            height:30px;
            padding: 5px 20px;
            margin: 8px 0;
            font-size: 14px;
            border: 1px solid black;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          }
        </style>

        <input class="form-input" type="${this.type}" id="${this.input_id}" placeholder="${this.placeholder}" name="${this.name}">
        
        `;

        this.shadow.innerHTML = template;
    }

    // get input_id(){
    //     return this.getAttribute('input_id');
    // }
    // set input_id(val){
    //     this.setAttribute('input_id', val)
    // }

    get placeholder(){
        return this.getAttribute('placeholder');
    }
    set placeholder(val){
        this.setAttribute('placeholder', val)
    }

    get name(){
        return this.getAttribute('name');
    }
    set name(val){
        this.setAttribute('name', val)
    }

    get type(){
        return this.getAttribute('type');
    }
    set type(val){
        this.setAttribute('type', val)
    }

   
}

window.customElements.define("custom-input", CustomInput)