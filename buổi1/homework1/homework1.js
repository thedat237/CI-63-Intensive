let data=[
    {
        name:'Do The Dat',
        age: 20,
        created_at: '2021-05-30'
    },
    {
        name:'Nguyen Ha Linh',
        age: 21,
        created_at: '2021-05-30'
    }
]

let userName=document.getElementById('user-name');
let userAge=document.getElementById('user-age');
let createdAt=document.getElementById('created-at');
let btnAdd=document.getElementById('btnAdd');
let newName=document.getElementById('name');
let newAge=document.getElementById('age');
let container=document.getElementById('container');


function seeInfor(){
    let space='';
    for(let dataUsers of data){
        console.log(data[1]);
        // li
        space+=` <div class="card" id="card">
                        <span  class='close'>&times</span>
                        <div class="img">
                            <img src="https://www.bradfieldconsulting.net/wp-content/uploads/2019/08/avatar-man.png" alt="">
                            
                        </div>
                        
                        <div class="content">
                            <h4 id="user-name"><b>${dataUsers.name}</b></h4>
                            <p id="user-age">${dataUsers.age}</p>
                            <p id="created-at">${dataUsers.created_at}</p>
                        </div>
                    </div> `
        container.innerHTML=space
    }
}
seeInfor()

//add card
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








