class Product {
    static _listProduct = [];
    static _listSell = [];
    constructor(id, name, cost, discount, dateAdd) {
        this._id = id;
        this._name = name;
        this._cost = cost;
        this._discount = discount;
        this._dateAdd = dateAdd;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get cost() {
        return this._cost;
    }

    set cost(cost) {
        this._cost = cost;
    }

    get discount() {
        return this._discount;
    }

    set discount(discount) {
        this._discount = discount;
    }

    get dateAdd() {
        return this._dateAdd;
    }

    set dateAdd(dateAdd) {
        this._dateAdd = dateAdd;
    }

    static getListProduct() {
        return this._listProduct;
    }

    static getSellProduct() {
        return this._listSell;
    }

    static addProduct(product) {
        this._listProduct.push(product);
    }

    static sellProduct(product) {
        const index = this._listProduct.findIndex((data) => {
            return data.id == product.id;
        })
        this._listProduct.splice(index, 1);
        this._listSell.push(product);
    }

    show() { };

    showSell() {
        let cost = this._cost * (1 - this._discount);
        return `
        <tr>
            <td>${this._id}</td>
            <td>${this._name}</td>
            <td>${this._cost}</td>
            <td>${this._discount * 100}%</td>
            <td>${cost}</td>
        </tr>
        `;
    }

}

class Houseware extends Product {
    constructor(id, name, cost, discount, dateAdd, reliability) {
        super(id, name, cost, discount, dateAdd);
        this._reliability = reliability;
    }

    get reliability() {
        return this._reliability;
    }

    set reliability(reliability) {
        this._reliability = reliability;
    }

    show() {
        return `
        <li class="product" id="${this._id}">
            <div class="product_title style_flex">
                <p>${this._id}</p>
                <p>${this._name}</p>
            </div>
            <div class="product_information">
                <p>Độ bền: ${this._reliability}</p>
                <p>Ngày nhập: ${this._dateAdd}</p>
            </div>
            <div class="product_cost style_flex">
                <p>Giá: ${this._cost}$</p>
                <button class="sell" onclick="sell('${this._id}')">Sell</button>
            </div>
        </li>
        `;
    }
}

class Clothes extends Product {
    constructor(id, name, cost, discount, dateAdd, origin, material) {
        super(id, name, cost, discount, dateAdd);
        this._origin = origin;
        this._material = material;
    }

    get origin() {
        return this._origin;
    }

    set origin(origin) {
        this._origin = origin;
    }

    get material() {
        return this._material;
    }

    set material(material) {
        this._material = material;
    }

    show() {
        return `
        <li class="product" id="${this._id}">
            <div class="product_title style_flex">
                <p>${this._id}</p>
                <p>${this._name}</p>
            </div>
            <div class="product_information">
                <p>Xuất xứ: ${this._origin}<span>Chất liệu: ${this._material}</span></p>
                <p>Ngày nhập: ${this._dateAdd}</p>
            </div>
            <div class="product_cost style_flex">
                <p>Giá: ${this._cost}$</p>
                <button class="sell" onclick="sell('${this._id}')">Sell</button>
            </div>
        </li>
        `;
    }
}

class Food extends Product {
    constructor(id, name, cost, discount, dateAdd, flavor) {
        super(id, name, cost, discount, dateAdd);
        this._flavor = flavor;
    }

    get flavor() {
        return this._flavor;
    }

    set flavor(flavor) {
        this._flavor = flavor;
    }

    show() {
        return `
        <li class="product" id="${this._id}">
            <div class="product_title style_flex">
                <p>${this._id}</p>
                <p>${this._name}</p>
            </div>
            <div class="product_information">
                <p>Vị: ${this._flavor}</p>
                <p>Ngày nhập: ${this._dateAdd}</p>
            </div>
            <div class="product_cost style_flex">
                <p>Giá: ${this._cost}$</p>
                <button class="sell" onclick="sell('${this._id}')">Sell</button>
            </div>
        </li>
        `;
    }
}

const getDate = () => {
    const newTime = new Date();
    const stringDate = `${newTime.getDate()} -${Number(newTime.getMonth()) + 1} -${newTime.getFullYear()} `;
    return stringDate;
}

Product.addProduct(new Houseware("H1", "Tủ lạnh", 500, 0.1, getDate(), "90%"));
Product.addProduct(new Houseware("H2", "TV", 1000, 0.1, getDate(), "95%"));
Product.addProduct(new Clothes("C1", "Quần jean", 20, 0.05, getDate(), "Korean", "Vải"));
Product.addProduct(new Clothes("C2", "Áo sơ mi", 10, 0.05, getDate(), "Japan", "Vải"));
Product.addProduct(new Food("F1", "Xoài", 5, 0.02, getDate(), "Ngọt"));
Product.addProduct(new Food("F2", "Dưa hấu", 8, 0.02, getDate(), "Ngọt"));

const changeArray = () => {
    const list = Product.getListProduct();
    const listProduct = {
        "houseware": [],
        "clothes": [],
        "food" : [],
    }
    for(let product of list){
        if(product instanceof Houseware) {
            listProduct["houseware"].push(product);
        }
        else if(product instanceof Clothes) {
            listProduct["clothes"].push(product);
        }
        else if(product instanceof Food) {
            listProduct["food"].push(product);
        }
    }
    return listProduct;
}

const getHTML = () => {
    const listProduct = changeArray();
    for (let pro in listProduct) {
        let stringData = "";
        listProduct[pro].forEach((data) => {
            stringData += data.show();
        })
        document.getElementById(pro).innerHTML = stringData;
    }
}

getHTML();

const getAddForm = () => {
    document.getElementById("store_add").style.display = "none";
    document.getElementById("store_cost").style.display = "none";
    document.getElementById("add").style.display = "block";
    document.querySelector("#add form").reset();
    document.getElementById("add_result").textContent = "";
    noneHTMLForm();
}

const closeAddForm = () => {
    document.getElementById("store_add").style.display = "block";
    document.getElementById("store_cost").style.display = "block";
    document.getElementById("add").style.display = "none";
}

const noneHTMLForm = () => {
    document.querySelector(".form_houseware").style.display = "none";
    document.querySelector(".form_clothes").style.display = "none";
    document.querySelector(".form_food").style.display = "none";
}

const getChangeForm = () => {
    const type = document.getElementById("type_product").value;
    noneHTMLForm();
    if (type == "none") {
    }
    else if (type == "houseware") {
        document.querySelector(".form_houseware").style.display = "block";
    }
    else if (type == "clothes") {
        document.querySelector(".form_clothes").style.display = "block";
    }
    else if (type == "food") {
        document.querySelector(".form_food").style.display = "block";
    }
}

const addProduct = () => {
    const id = document.getElementById("add_id").value;
    const name = document.getElementById("add_name").value;
    const cost = document.getElementById("add_cost").value;
    const type = document.getElementById("type_product").value;
    const result = document.getElementById("add_result");
    result.style.color = "red";
    if (type == "none") {
        result.textContent = "Cần chọn loại sản phẩm!";
    }
    else if (checkID(id)) {
        result.textContent = "Mã ID đã được sử dụng!";
    }
    else if (type == "houseware") {
        const reli = document.getElementById("add_reli").value;
        if (id == "" || name == "" || cost == "" || reli == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            const newProduct = new Houseware(id, name, cost, 0.1, getDate(), reli);
            Product.addProduct(newProduct);
            document.getElementById(type).insertAdjacentHTML('beforeend', newProduct.show());
            addResult();
        }
    }
    else if (type == "clothes") {
        const origin = document.getElementById("add_origin").value;
        const mater = document.getElementById("add_mater").value;
        if (id == "" || name == "" || cost == "" || origin == "" || mater == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            const newProduct = new Houseware(id, name, cost, 0.05, getDate(), origin, mater);
            Product.addProduct(newProduct);
            document.getElementById(type).insertAdjacentHTML('beforeend', newProduct.show());
            addResult();
        }
    }
    else if (type == "food") {
        const fla = document.getElementById("add_fla").value;
        if (id == "" || name == "" || cost == "" || fla == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            const newProduct = new Houseware(id, name, cost, 0.02, getDate(), fla);
            Product.addProduct(newProduct);
            document.getElementById(type).insertAdjacentHTML('beforeend', newProduct.show());
            addResult();
        }
    }
}

const checkID = (idProduct) => {
    return Product.getListProduct().some((product) => {
        return product.id == idProduct;
    })
}

const addResult = () => {
    const result = document.getElementById("add_result");
    result.style.color = "green";
    result.textContent = "Thêm thành công!";
    setTimeout(closeAddForm, 1000);
}

const sell = (idProduct) => {
    document.getElementById(idProduct).remove();
    Product.sellProduct(Product.getListProduct().find((product) => {
        return product.id == idProduct;
    }))
    console.log(Product.getSellProduct());
}

const getCost = () => {
    document.getElementById("store_add").style.display = "none";
    document.getElementById("store_cost").style.display = "none";
    document.getElementById("sell").style.display = "block";
    let stringSell = `
    <tr>
        <th>ID</th>
        <th>Tên sản phẩm</th>
        <th>Đơn giá</th>
        <th>Giảm giá</th>
        <th>Thành tiền</th>
    </tr>`;
    let sumCost = 0;
    Product.getSellProduct().forEach((product) => {
        stringSell += product.showSell();
        sumCost += Number(product.cost) *(1 - Number(product.discount));
    })
    document.querySelector("#sell_content table").innerHTML = stringSell;
    document.getElementById("sumCost").textContent = `Tổng tiền: ${sumCost}$`;
}

const closeCost = () => {
    document.getElementById("store_add").style.display = "block";
    document.getElementById("store_cost").style.display = "block";
    document.getElementById("sell").style.display = "none";
}

