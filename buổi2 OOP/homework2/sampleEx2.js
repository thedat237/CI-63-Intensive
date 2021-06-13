let dateCreated = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    return `${h}:${m}:${s}`
}

class Manager {
    constructor(id, name, price, producer, discount, dateAdded) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._producer = producer;
        this._discount = discount;
        this._dateAdded = dateAdded;
    }

    //id
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    //name
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    //price
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }

    //producer
    get producer() {
        return this._producer;
    }
    set producer(value) {
        this._producer = value;
    }

    //discount
    get discount() {
        return this._discount;
    }
    set discount(value) {
        this._discount = value;
    }

    //dateAdded
    get dateAdded() {
        return this._dateAdded;
    }
    set dateAdded(value) {
        this._dateAdded = value;
    }

    static add(id, name, price, producer, discount, dateAdded) {
        return new Manager(id, name, price, producer, discount, dateAdded)
    }
}

class Houseware extends Manager {
    constructor(id, name, price, producer, discount, dateAdded, reliability) {
        super(id, name, price, producer, discount, dateAdded);
        this._reliability = reliability;
    }

    get reliability() {
        return this._reliability;
    }
    set reliability(value) {
        this._reliability = value;
    }

    static add(id, name, price, producer, discount, dateAdded, reliability) {
        return new Houseware(id, name, price, producer, discount, dateAdded, reliability)
    }
}

class Clothes extends Manager {
    constructor(id, name, price, producer, discount, dateAdded, material) {
        super(id, name, price, producer, discount, dateAdded);
        this._material = material;
    }

    get material() {
        return this._material;
    }
    set material(value) {
        this._material = value;
    }

    static add(id, name, price, producer, discount, dateAdded, material) {
        return new Clothes(id, name, price, producer, discount, dateAdded, material)
    }
}

class Foods extends Manager {
    constructor(id, name, price, producer, discount, dateAdded, taste) {
        super(id, name, price, producer, discount, dateAdded);
        this._taste = taste;
    }

    get taste() {
        return this._taste;
    }
    set taste(value) {
        this._taste = value;
    }

    static add(id, name, price, producer, discount, dateAdded, taste) {
        return new Foods(id, name, price, producer, discount, dateAdded, taste)
    }
}


let totalSell = 0;
let countSell = () => {
    alert(`Tổng doanh thu bán hàng là: ${totalSell}đ`)
}


//-----------------------Houseware==============================//

let dataHouseware = [];
let listHouseware = document.querySelector(".container-houseware");

let getHouseware = () => {
    for (let i = 0; i < dataHouseware.length; i++) {
        let htmls = `
        <tr>
           <th>${dataHouseware[i].id}</th>
           <th>${dataHouseware[i].name}</th>
           <th>${dataHouseware[i].price}đ</th>
           <th>${dataHouseware[i].producer}</th>
           <th>${dataHouseware[i].discount}%</th>
           <th>${dataHouseware[i].dateAdded}</th>
           <th>${dataHouseware[i].reliability}</th>
        </tr>
        `
        listHouseware.innerHTML += htmls;
    }
}

let setHouseware = () => {
    listHouseware.innerHTML = `
    <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Producer</th>
            <th>Discount</th>
            <th>Date Added</th>
            <th>Reliability</th>
        </tr>`;
    getHouseware();
}

let addHouseware = () => {
    let newID = prompt("Nhap ID");
    let newName = prompt("Nhap ten hang moi");
    let newPrice = prompt("Nhap gia hang");
    let newProducer = prompt("Nhap nha san xuat");
    let newDiscount = prompt("Nhap giam gia");
    let newdateAdded = dateCreated();
    let newReliability = prompt("Nhap do ben");

    let newE = Houseware.add(newID, newName, newPrice, newProducer, newDiscount, newdateAdded, newReliability)
    dataHouseware.push(newE);
    console.log(dataHouseware);
    setHouseware();
}

let sellHouseware = () => {
    let inputID = prompt("Nhap ID hang da ban").toLowerCase();
    for (let i = 0; i < dataHouseware.length; i++) {
        if (inputID === dataHouseware[i].id.toLowerCase()) {
            totalSell += (dataHouseware[i].price * (1 - dataHouseware[i].discount / 100));
            dataHouseware.splice(i, 1);
        }
    }
    console.log(dataHouseware);
    console.log(totalSell);
    setHouseware();
}


//--------------x--------Houseware==================x===========//


//-----------------------Clothers--------------------------------//

let dataClothes = [];
let listClothes = document.querySelector(".container-clothers");

let getClothes = () => {
    for (let i = 0; i < dataClothes.length; i++) {
        let htmls = `
        <tr>
           <th>${dataClothes[i].id}</th>
           <th>${dataClothes[i].name}</th>
           <th>${dataClothes[i].price}đ</th>
           <th>${dataClothes[i].producer}</th>
           <th>${dataClothes[i].discount}%</th>
           <th>${dataClothes[i].dateAdded}</th>
           <th>${dataClothes[i].material}</th>
        </tr>
        `
        listClothes.innerHTML += htmls;
    }
}

let setClothes = () => {
    listClothes.innerHTML = `
    <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Producer</th>
            <th>Discount</th>
            <th>Date Added</th>
            <th>Material</th>
        </tr>`;
    getClothes();
}

let addClothes = () => {
    let newID = prompt("Nhap ID");
    let newName = prompt("Nhap ten hang moi");
    let newPrice = prompt("Nhap gia hang");
    let newProducer = prompt("Nhap nha san xuat");
    let newDiscount = prompt("Nhap giam gia");
    let newdateAdded = dateCreated();
    let newMaterial = prompt("Nhap chat lieu");

    let newE = Clothes.add(newID, newName, newPrice, newProducer, newDiscount, newdateAdded, newMaterial)
    dataClothes.push(newE);
    console.log(dataClothes);
    setClothes();
}

let sellClothes = () => {
    let inputID = prompt("Nhap ID hang da ban").toLowerCase();
    for (let i = 0; i < dataClothes.length; i++) {
        if (inputID === dataClothes[i].id.toLowerCase()) {
            totalSell += (dataClothes[i].price * (1 - dataClothes[i].discount / 100));
            dataClothes.splice(i, 1);
        }
    }
    console.log(dataClothes);
    console.log(totalSell);
    setClothes();
}

//------------x----------Clothers-----------------x--------------//


//-----------------------Foods--------------------------------//

let dataFoods = [];
let listFoods = document.querySelector(".container-foods");

let getFoods = () => {
    for (let i = 0; i < dataFoods.length; i++) {
        let htmls = `
        <tr>
           <th>${dataFoods[i].id}</th>
           <th>${dataFoods[i].name}</th>
           <th>${dataFoods[i].price}đ</th>
           <th>${dataFoods[i].producer}</th>
           <th>${dataFoods[i].discount}%</th>
           <th>${dataFoods[i].dateAdded}</th>
           <th>${dataFoods[i].taste}</th>
        </tr>
        `
        listFoods.innerHTML += htmls;
    }
}

let setFoods = () => {
    listFoods.innerHTML = `
    <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Producer</th>
            <th>Discount</th>
            <th>Date Added</th>
            <th>Taste</th>
        </tr>`;
    getFoods();
}

let addFoods = () => {
    let newID = prompt("Nhap ID");
    let newName = prompt("Nhap ten hang moi");
    let newPrice = prompt("Nhap gia hang");
    let newProducer = prompt("Nhap nha san xuat");
    let newDiscount = prompt("Nhap giam gia");
    let newdateAdded = dateCreated();
    let newTaste = prompt("Nhap vi do an");

    let newE = Foods.add(newID, newName, newPrice, newProducer, newDiscount, newdateAdded, newTaste)
    dataFoods.push(newE);
    console.log(dataFoods);
    setFoods();
}

let sellFoods = () => {
    let inputID = prompt("Nhap ID hang da ban").toLowerCase();
    for (let i = 0; i < dataFoods.length; i++) {
        if (inputID === dataFoods[i].id.toLowerCase()) {
            totalSell += (dataFoods[i].price * (1 - dataFoods[i].discount / 100));
            dataFoods.splice(i, 1);
        }
    }
    console.log(dataFoods);
    console.log(totalSell);
    setFoods();
}

//-----------x-----------Foods-----------------x--------------//

