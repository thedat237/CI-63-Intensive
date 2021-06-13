const name=document.getElementById('name');
const id=document.getElementById('id');
const img=document.getElementById('image')
const createdAt=document.getElementById('created_at');
export function processAdd(){
    const newEmployee= new Employee (id.value, name.value, img.value, createdAt.value);
    console.log('New Employee:');
    console.log({newEmployee});
    listEmployee.push(newEmployee)
    console.log('List Employee:');
    console.log(listEmployee);
    container.innerHTML=newEmployee.getNewCard()
    // for(let i of listEmployee){
    //     console.log(i);
    // }
}