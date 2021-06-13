// Ex2: Manager Store

import Fruit from "./Fruit.js";
// import{processAdd} from "./ProcessAdd.js";
// console.log(processAdd);
// import {processBuy} from "./ProcessBuy.js";
// console.log(processBuy);
// import {processSale} from "./ProcessSale.js";
// console.log(processSale);

import{ 
    processAdd,
    processBuy,
    processSale
} from "./ProcessAdd.js";

class Apple extends Fruit{
    constructor(id, name, price, producer, discount, import_at, properties){
        super(id, name, price, producer, discount, import_at);
        this._properties=properties;
    }

    get properties(){
        return this._properties;
    }
    set properties(value){
        this._properties=value;
    }

    getString(){
        return`${this._id}. Name: ${this._name} ~ Price:${this._price} ~ Producer:${this._producer} ~ Discount:${this._discount} ~ Import At:${this._import_at} ~ Properties:${this._properties}`
    }

}

const listFruit=[]

// const appleUSA = new Apple ('01', 'Apple USA', '5$', 'USA', 'none', '2021-06-03', 'color: Red');
// console.log(appleUSA.getString());
// console.log({appleUSA});
// listFruit.push(appleUSA)


const apple = new Fruit ('01', 'Apple', 5000, 'USA', 10, '2021-06-02');
const oragne = new Fruit ('02', 'Oragne', 2000, 'USA', 5, '2021-06-03');
console.log(apple.getString());
// console.log({apple});
listFruit.push(apple)
listFruit.push(oragne)
console.log('List Fruit In Store:');
console.log(listFruit);

function processAdd() {
    
    const id=prompt('Enter id:');
    const name=prompt('Enter name:');
    const price=Number(prompt('Enter price:'));
    const producer=prompt('Enter producer');
    const discount=prompt('Enter discount');
    const import_at=prompt('Enter import at');

    const newFruit = new Fruit (id, name, price, producer, discount, import_at)
    // console.log({newFruit});
    // console.log(newFruit.getString());
    listFruit.push(newFruit)
    console.log('List Fruit In Store:');
    console.log(listFruit);
}

function processBuy(){
    const listBuyedFruit=[];
    const name=prompt('Enter fruit name want to buy')
    for(let fruit=0;fruit<listFruit.length;fruit++){
        // console.log(listFruit[fruit]);
        if (name==listFruit[fruit].name){
            console.log(`You buyed ${listFruit[fruit].name}`);
            listBuyedFruit.push(listFruit[fruit])
            listFruit.splice(fruit, 1)
            console.log('List Fruit In Store:');
            console.log(listFruit);
            console.log('List Buyed Fruit In Store:');
            console.log(listBuyedFruit);
        }
    }
}

function processSale(){
    const listPay=[]
    for(let buyedfruit in listBuyedFruit){
        
        // listPay.push(listBuyedFruit[buyedfruit].price)
        // listPay.push(listBuyedFruit[buyedfruit].discount)
        // console.log(listPay);
        var price=0;
        price+=(listBuyedFruit[buyedfruit].price * (1 - listBuyedFruit[buyedfruit].discount / 100));
        console.log(`Money Fruit: ${listBuyedFruit[buyedfruit].name}: ${price}`);
        listPay.push(price)
        var total=0;
        for(let i=0;i<listPay.length;i++){
            total+=listPay[i];
            console.log(`You Must Pay: ${total}`);
        }

        
    }
    
}





// sum+=(listPay[buyedfruit].price * (1 - listPay[buyedfruit].discount / 100));




