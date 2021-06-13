import "./progress.js";
import data from "./data.js";

let btnAdd=document.getElementById('btnAdd');
let newName=document.getElementById('name');
let newAge=document.getElementById('age');
let container=document.getElementById('container');

function seeInfor(){
    let space='';
    for(let dataUsers of data){
        space+=` 
        <custom-card name="${dataUsers.name}" age="${dataUsers.age}" created_at="${dataUsers.created_at}"></custom-card>
        `
        container.innerHTML=space;
    }
}
seeInfor()


function addInfor(){
    data.push(
        {name:`${newName.value}`,
        age:` ${newAge.value}`,
        created_at: '2021-05-30'}
    )
    seeInfor()
}
btnAdd.addEventListener('click',addInfor)


//close card
    let closebtns = document.getElementsByClassName("close");
    for (let i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}