import Employee from "./Employee.js";


const name=document.getElementById('name');
const email=document.getElementById('email');
const age=document.getElementById('age');
const saveData=document.getElementById('saveData');
const employeeTbl = document.getElementById("employee-table");


const seeTask = (id) => firebase.firestore().collection('employees').doc(id).get();
const deletes = (id) => firebase.firestore().collection('employees').doc(id).delete();
const update = (id, update) => firebase.firestore().collection('employees').doc(id).update(update);
const getTasks = () =>  firebase.firestore().collection('employees').get();

let edit=false;
let id='';

const inputForm=document.getElementById('input-form')

// const nametd=document.getElementById("nametd");
// const emailtd=document.getElementById("emailtd");
// const agetd=document.getElementById('agetd');

saveData.addEventListener('click', async (e)=>{
    e.preventDefault();
    let nameInput = name.value;
    let emailInput=email.value;
    let ageInput=age.value;

    // if(nameInput=='' || emailInput==''){
    //     alert('please enter the fields ')
    // }
    // else 
    if(!edit){
        await firebase.firestore().collection("employees").doc().set({
            nameInput,
            emailInput,
            ageInput
        })
    }
    else{
        await update(id, {
            nameInput: name.value,
            emailInput: email.value,
            ageInput: age.value
        })
    }
    console.log(nameInput, emailInput, ageInput);
    await getTasks()
})


window.addEventListener('DOMContentLoaded', async (e) =>{
    const snap = await getTasks();
    snap.forEach (doc => {
        console.log(doc.data());

        const data=doc.data()
        
        employeeTbl.innerHTML+=`<tr id="${doc.id}">
                                    <td id="id-${doc.id}">${doc.id} </td>
                                    <td id="nametd">${data.nameInput} </td>
                                    <td id="emailtd">${data.emailInput}</td>
                                    <td id="agetd">${data.ageInput}</td>
                                    <td>
                                        <button id="updateData" data-id="${doc.id}">UPDATE</button>
                                        <button id="deleteData" data-id="${doc.id}">DELETE</button>
                                    </td>
                                </tr>`;
        

        const updateData=document.querySelectorAll('#updateData');
        updateData.forEach(btn => {
            btn.addEventListener('click', async (e) =>{
            const doc = await seeTask(e.target.dataset.id);
            const task = doc.data();

            edit=true;
            id=doc.id;

                name.value= task.nameInput;
                email.value=task.emailInput;
                age.value=task.ageInput;
                saveData.innerText="Update";
            
            })
        })

        const deleteData=document.querySelectorAll('#deleteData');
        deleteData.forEach(btn => {
            btn.addEventListener('click', async (e) =>{  
                await deletes(e.target.dataset.id)
            })
        })
    })
})











