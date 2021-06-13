//Ex1: Manager Employee
import Employee from "./Employee.js";
import {processAdd} from "./ProcessAdd.js";
console.log(processAdd);
import {processUpdate} from "./ProcessUpdate.js";
console.log(processUpdate);
import {processDelete} from "./processDelete.js";
console.log(processDelete);


const listEmployee=[];

const Employee1= new Employee('01', 'Do The Dat', 'avatar-man.png', '2021-06-02');

console.log({Employee1});
listEmployee.push(Employee1);

const container=document.getElementById('container');
container.innerHTML=Employee1.getNewCard();

// const name=document.getElementById('name');
// const id=document.getElementById('id');
// const img=document.getElementById('image')
// const createdAt=document.getElementById('created_at');













