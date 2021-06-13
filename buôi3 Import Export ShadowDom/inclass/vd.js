const btnChange=document.getElementById('btnChange')
function changeProduct(){
    document.querySelector('product-card').name='Doob';
}
btnChange.addEventListener('click', changeProduct)

const btnBack=document.getElementById('btnBack');
function backProduct(){
    document.querySelector('product-card').setAttribute('name', 'Doob');
}
btnBack.addEventListener('click', backProduct)


const template =document.createElement('template');
template.innerHTML=`<style>h2{color:red}</style><h2></h2>
                    <button>haha</button>
                    `;

class customCard extends HTMLElement{
    static get observedAttributes(){
        return ['name'];
    }

    constructor(){
        super();
        this.attachShadow ({
            mode: "open"
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText=this.getAttribute('name');
    }

    get name(){
        return this.shadowRoot.querySelector('h2').innerText;
    }

    set name(val){
        return this.shadowRoot.querySelector('h2').innerText=val;
    }


    attributeChangedCallback(name, oldValue, newValue){
        if(name === 'name'){
            this.shadowRoot.querySelector('h2').innerText=newValue;
        }
    }

    connectedCallback(){
        this.shadowRoot.querySelector('button').addEventListener('click', ()=> alert("ok"))
    }

    disconectedCallback(){
        this.shadowRoot.querySelector('button').rem
    }
}

window.customElements.define('product-card', customCard);