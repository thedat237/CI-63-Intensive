// export function processAdd() {
//     const listFruit=[];
//     const id=prompt('Enter id:');
//     const name=prompt('Enter name:');
//     const price=Number(prompt('Enter price:'));
//     const producer=prompt('Enter producer');
//     const discount=prompt('Enter discount');
//     const import_at=prompt('Enter import at');

//     const newFruit = new Fruit (id, name, price, producer, discount, import_at)
//     // console.log({newFruit});
//     // console.log(newFruit.getString());
//     listFruit.push(newFruit)
//     console.log('List Fruit In Store:');
//     console.log(listFruit);
// }

export{
    processAdd,
    processBuy,
    processSale
}