

export function processSale(){
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