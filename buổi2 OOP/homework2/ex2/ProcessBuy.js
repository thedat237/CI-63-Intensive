

export function processBuy(){
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