import Employee from "./Employee.js";
import EmployeeCollection from "./EmployeeCollection.js";





// class Employee{
//     constructor(id, name, image, create_at){
//         this._id = id;
//         this._name = name;
//         this._image = image;
//         this._create_at = create_at;
//     }

//     get id() {
//         return this._id;
//     }

//     set id(id) {
//         this._id = id;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(name) {
//         this._name = name;
//     }

//     get image() {
//         return this._image;
//     }

//     set image(image) {
//         this._image = image;
//     }

//     get create_at() {
//         return this._create_at;
//     }

//     set create_at(create_at) {
//         this._create_at = create_at;
//     }

//     show() {
//         return `
//         <li class="profile_staff content_profile" id="${this._id}">
//             <div class="profile_img">
//                 <i class="fa fa-close" onclick="deleteGroup('${this._id}')"></i>
//                 <img id="image_${this._id}" src="${this._image}">
//             </div><hr>
//             <div class="staff_id">ID: ${this._id}</div><hr>
//             <div id="name_${this._id}" class="staff_name">${this._name}</div><hr>
//             <div class="staff_create">Ngày thêm: ${getDate()}</div>
//         </li>`;
//     }

//     update(data) {
//         if(data) {
//             if(data.name) {
//                 this._name = data.name;
//             }
//             if(data.image) {
//                 this._image = data.image;
//             }
//         }
//     }
// }

// class EmployeeCollection {
//     constructor(id, name, owner){
//         this._id = id;
//         this._name = name;
//         this._owner = owner;
//         this._employees = [];
//     }

//     get id() {
//         return this._id;
//     }

//     set id(id) {
//         this._id = id;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(name) {
//         this._name = name;
//     }

//     get owner() {
//         return this._owner;
//     }

//     set owner(owner) {
//         this._owner = owner;
//     }

//     get employees() {
//         return this._employees;
//     }

//     set employees(employees) {
//         this._employees = employees;
//     }

//     add(employee) {
//         if(employee instanceof Employee){
//             this._employees.push(employee);
//         }
//     }

//     update(id, data) {
//         const index = this._employees.findIndex((value) => {
//             return value.id == id;
//         });
//         this._employees[index].update(data);
//     }

//     delete(id) {
//         const index = this._employees.findIndex((value) => {
//             return value.id == id;
//         });
//         this._employees.splice(index, 1);
//     }

//     show() {
//         let stringProfile = "";
//         this._employees.forEach((data) => {
//             stringProfile += data.show();
//         })
//         return stringProfile;
//     }
// }

const getDate = () => {
    const newTime = new Date();
    const stringDate = `${newTime.getDate()}-${Number(newTime.getMonth()) + 1}-${newTime.getFullYear()}`;
    return stringDate;
}

const listGroup = {};
listGroup["G1"] = new EmployeeCollection("G1", "DEV", "Nguyuyễn Hữu Dũng");
listGroup["G1"].add(new Employee("G1-1", "Nguyễn A", "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg", getDate()));
listGroup["G1"].add(new Employee("G1-2", "Nguyễn B", "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg", getDate()));
listGroup["G2"] = new EmployeeCollection("G2", "KNM", "Vũ Thùy Dung");
listGroup["G2"].add(new Employee("G2-1", "Vũ Dung", "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-3.jpg", getDate()));
listGroup["G2"].add(new Employee("G2-2", "Trần Kim", "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg", getDate()));

const getForm = (nameForm) => {
    document.getElementById(nameForm).style.display = "block";
    document.getElementById(`icon_add`).style.display = "none";
    document.getElementById(`icon_update`).style.display = "none";
    document.getElementById(`icon_back`).style.display = "none";
    document.querySelector(`#${nameForm} form`).reset();
    document.getElementById(`${nameForm}_result`).textContent = "";
}

const closeForm = (nameForm) => {
    document.getElementById(nameForm).style.display = "none";
    document.getElementById(`icon_add`).style.display = "block";
    document.getElementById(`icon_update`).style.display = "block";
    document.getElementById(`icon_back`).style.display = "block";
}

const backPage = () => {
    document.getElementById("list_group").style.display = "block";
    document.querySelector(".changePage").id = "show_group";
}

const addListGroup = () => {
    const addID = document.getElementById("add_id_group").value;
    const name = document.getElementById("add_name_group").value;
    const owner = document.getElementById("add_owner_group").value;
    let result = document.getElementById("add_group_result");
    result.style.color = "red";
    if(addID == "" || name == "" || owner == ""){
        result.textContent = "Cần nhập đủ các trường!";
    }
    else if(listGroup[addID] != null) {
        result.textContent = "ID nhóm đã tồn tài!";
    }
    else {
        document.getElementById("list_group_content").insertAdjacentHTML(`beforeend`, `
        <li class="content_profile" onclick="getGroup('${addID}')">
            <div>ID Group: ${addID}</div>
            <div>Name: ${name}</div>
            <div>Owner: ${owner}</div>
        </li>`)
        listGroup[addID] = new EmployeeCollection(addID, name, owner);
        result.style.color = "green";
        result.textContent = "Tạo thành công!";
        setTimeout(() => {closeForm('add_group')}, 1000);
    }
    
}

const getListGroup = () => {
    let stringHTML = "";
    for(let index in listGroup){
        stringHTML += `
        <li class="content_profile" onclick="getGroup('${index}')">
            <div>ID Group: ${index}</div>
            <div>Name: ${listGroup[index]._name}</div>
            <div>Owner: ${listGroup[index]._owner}</div>
        </li>`
    }
    document.getElementById("list_group_content").innerHTML = stringHTML;
}

getListGroup();


const getGroup = (groupID) => {
    document.getElementById("list_group").style.display = "none";
    document.querySelector(".changePage").id = groupID;
    document.getElementById("profile").innerHTML = listGroup[groupID].show();
}

const addEmployee = () => {
    const groupID = document.querySelector(".changePage").id;
    const addID = document.getElementById("add_id").value;
    const name = document.getElementById("add_name").value;
    const image = document.getElementById("add_image").value;
    let result = document.getElementById("add_result");
    result.style.color = "red";
    if(addID == "" || name == "" || image == "") {
        result.textContent = "Cần nhập đủ các trường!";
    }
    else if (listGroup[groupID].employees.some((data) => {
        return data.id == addID;})){
        result.textContent = "ID đã tồn tại trong nhóm";
    }
    else {
        const newEmployee = new Employee(addID, name, image, getDate());
        document.getElementById("profile").insertAdjacentHTML(`beforeend`, newEmployee.show());
        listGroup[groupID].employees.push(newEmployee);
        result.style.color = "green";
        result.textContent = "Thêm thành công";
        setTimeout(() => {closeForm('add')}, 1000);
    }
}

const updateEmployee = () => {
    const groupID = document.querySelector(".changePage").id;
    const addID = document.getElementById("update_id").value;
    const name = document.getElementById("update_name").value;
    const image = document.getElementById("update_image").value;
    let result = document.getElementById("update_result");
    result.style.color = "red";
    if(addID == "") {
        result.textContent = "Cần nhập ID!";
    }
    else if (listGroup[groupID].employees.every((data) => {
        return data.id != addID;
    })) {
        result.textContent = "Không tìm thấy ID trong nhóm";
    }
    else {
        listGroup[groupID].update(addID, {name, image});
        if(name != "") {document.getElementById(`name_${addID}`).textContent = name;};
        if(image != "") {document.getElementById(`image_${addID}`).src = image;};
        result.style.color = "green";
        result.textContent = "Cập nhật thành công";
        setTimeout(() => {closeForm('update')}, 1000);
    }
}


const deleteGroup = (idEmployee) => {
    console.log(idEmployee);
    const groupID = document.querySelector(".changePage").id;
    listGroup[groupID].delete(idEmployee);
    document.getElementById(idEmployee).remove();
}
