class Fruit{
    constructor(id, name, price, producer, discount, import_at){
        this._id=id;
        this._name=name;
        this._price=price;
        this._producer=producer;
        this._discount=discount;
        this._import_at=import_at
    }
    get id(){
        return this._id;
    }
    set id(value){
        this._id=value;
    }


    get name(){
        return this._name;
    }
    set name(value){
        this._name=value;
    }

    get price(){
        return this._price;
    }
    set price(value){
        this._price=value;
    }

    get producer(){
        return this._producer;
    }
    set producer(value){
        this._producer=value;
    }

    get discount(){
        return this._discount;
    }
    set discount(value){
        this._discount=value;
    }

    get import_at(){
        return this._import_at;
    }
    set import_at(value){
        this._import_at=value;
    }

    getString(){
        return`${this._id}. Name: ${this._name} ~ Price:${this._price} ~ Producer:${this._producer} ~ Discount:${this._discount} ~ Import At:${this._import_at}`      
    }
}

export default Fruit;