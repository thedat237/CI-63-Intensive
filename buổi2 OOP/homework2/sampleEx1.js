let dateCreated = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    return `${h}:${m}:${s}`
}

class Employee {
    constructor(name, image, createdAt) {
        this._name = name;
        this._image = image;
        this._createdAt = createdAt;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }

    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }

    show() {
        return `Name: ${this._name} | Image: ${this._image} | Created At: ${this._createdAt}`
    }

    static update(employee) {
        let upName = prompt("Nhập tên sửa:");
        let upImage = prompt("Nhập ảnh sửa:");

        this._name = upName;
        this._image = upImage;
        this._createdAt = dateCreated()

        return employee;
    }
}


class EmployeeCollection extends Employee {
    constructor(name, image, createdAt, owner) {
        super(name, image, createdAt);
        this._owner = owner;
    }

    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }

    show() {
        return `Name: ${this._name} | Image: ${this._image} | Created At: ${this._createdAt} | Owner: ${this._owner}`
    }

    static add(newName, newImage, newDate, newOwner) {
        return new EmployeeCollection(newName, newImage, newDate, newOwner)
    }

    update(employee) {
        let upName = prompt("Nhập tên sửa:");
        let upImage = prompt("Nhập ảnh sửa:");
        let upOwner = prompt("Nhập người sửa:");

        this._name = upName;
        this._image = upImage;
        this._createdAt = dateCreated();
        this._owner = upOwner;

        return employee;
    }
}

let dataEmployee = [];
let employee = new EmployeeCollection("Nguyen Van A", 'Avatar1', dateCreated(), "chinh")
dataEmployee.push(employee);

let employee1 = new EmployeeCollection("Nguyen Van B", 'Avatar2', dateCreated(), "chinh")
dataEmployee.push(employee1);

let employee2 = new EmployeeCollection("Nguyen Van C", 'Avatar3', dateCreated(), "chinh")
dataEmployee.push(employee2);


let listEmployee = document.querySelector(".container");

let getEmployee = () => {
    for (let i = 0; i < dataEmployee.length; i++) {
        let htmls = `
        <tr>
            <th>${i + 1}</th>
            <th>${dataEmployee[i].name}</th>
            <th>${dataEmployee[i].createdAt}</th>
            <th>${dataEmployee[i].image}</th>
            <th>${dataEmployee[i].owner}</th>
        </tr>
        `
        listEmployee.innerHTML += htmls;
    }
}

let setEmployee = () => {
    listEmployee.innerHTML = `<tr>
    <th>STT</th>
    <th>Name</th>
    <th>image</th>
    <th>Date Created</th>
    <th>Owner</th>
    </tr>`;
    getEmployee()
}

let addEmployee = () => {
    let newName = prompt("Nhập tên thêm mới:");
    let newImage = prompt("Nhập ảnh thêm mới:");
    let newDate = dateCreated();
    let newOwner = prompt("Nhập người tạo:");

    let newE = EmployeeCollection.add(newName, newImage, newDate, newOwner)
    dataEmployee.push(newE);
    console.log(dataEmployee);
    setEmployee()
}


let updateEmployee = () => {
    let idInput = Number(prompt("Nhập id nhân viên muốn sửa"));
    for (let i = 0; i < dataEmployee.length; i++) {
        if (idInput - 1 == i) {
            dataEmployee[i].update(employee);
        }
    }
    console.log(dataEmployee);
    setEmployee();
}


function deleteEmployee() {
    let idInput = Number(prompt("Nhập id nhân viên muốn xóa"));
    for (let i = 0; i < dataEmployee.length; i++) {
        if (idInput - 1 == i) {
            dataEmployee.splice(i, 1);
        }
    }
    console.log(dataEmployee);
    setEmployee();
}
