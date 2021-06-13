
class CustomCard extends HTMLElement{
    constructor(){
        super();
        this.shadow=this.attachShadow({
            mode:'open'
        });
        // this._name='DO THE DAT';
        // this._age=21;
        // this._created_at='2021-06-07'
    }
    static get onservedAttributes(){
        return [" name, age, created_at"];
    }

    attributeChangedCallback(name, oldValue, newValue){

    }

    connectedCallback(){
    
        const template=`
            <style>
            .container {
              font-family: sans-serif;
              background-color: gray;
              position: relative;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
            }
            
            .container .card {
              position: relative;
              max-width: 300px;
              height: 420px;
              background-color: #fff;
              margin: 20px;
              padding: 20px 15px;
              display: flex;
              flex-direction: column;
            }
            
            .container .card .img {
              position: relative;
              width: 260px;
              height: 260px;
            }
            
            .container .card .img img {
              max-width: 100%;
            }
            
            .container .card .content {
              position: relative;
              margin-top: 20px;
              padding: 10px 15px;
            }
            
            .close {
              cursor: pointer;
              position: absolute;
              top: 4%;
              right: 0%;
              padding: 12px 16px;
              font-size: 30px;
              transform: translate(0%, -50%);
            }
            
            
            
            </style>
            <div class='container'>
                <div class="card" id="card">
                            <span  class='close'>&times</span>
                            <div class="img">
                                <img src="https://www.bradfieldconsulting.net/wp-content/uploads/2019/08/avatar-man.png" alt="">
                                
                            </div>
                            
                            <div class="content">
                                <h4 id="user-name"><b>${this.name}</b></h4>
                                <p id="user-age">${this.age}</p>
                                <p id="created-at">${this.created_at}</p>
                            </div>
                </div>
            </div>
            
        `;
        this.shadow.innerHTML = template;

        
    }
    get name(){
        return this.getAttribute('name');
    }
    set name(val){
        this.setAttribute('name', val)
    }

    get age(){
      return this.getAttribute('age');
    }
    set age(val){
      this.setAttribute('age', val)
    }

    get created_at(){
      return this.getAttribute('created_at');
    }
    set created_at(val){
      this.setAttribute('created_at', val)
    }


}

window.customElements.define('custom-card', CustomCard)