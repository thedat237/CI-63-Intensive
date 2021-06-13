class Employee{
    constructor(id, name, image, created_at){
        this._id=id;
        this._name=name;
        this._image=image;
        this.created_at=created_at;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id=value
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name=value
    }

    get image(){
        return this._image;
    }

    set image(value){
        this._image=value
    }

    get created_at(){
        return this._id;
    }

    set created_at(value){
        this._created_at=value
    }

    getNewCard(){
        return `<div class="card" id="card">
             <span  class='close'>&times</span>
             <div class="img" id="user-image">
                 <img src="${this._image}" alt="">
                
            </div>
            
            <div class="content">
                <h4 id="user-id"><b>${this._id}</b></h4>
                <p id="user-name">${this._name}</p>
                <p id="created-at">${this._created_at}</p>
            </div>
        </div>`

        // return`The Id ${this._id} has name is ${this._name} and created at ${this._created_at}`
        
    }
}

export default Employee;