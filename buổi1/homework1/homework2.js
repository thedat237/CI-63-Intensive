let dataCustomer=[
    {
        id:1,
        Company:'Alfreds Futterkiste',
        Contact:'Maria Anders',
        Country:'Germany'
    },

    {
       id:2,
        Company:'Centro comercial Moctezuma',
        Contact:'Francisco Chang',
        Country:'Mexico'
    },

    {
        id:3,
        Company:'Ernst Handel',
        Contact:'Roland Mendel',
        Country:'Austria'
    },

    {
        id:4,
        Company:'Island Trading',
        Contact:'Helen Bennett',
        Country:'UK'
    },
]

let idInput=document.getElementById('id-input');
let companyInput=document.getElementById('company-input');
let contactInput=document.getElementById('contact-input');
let countryInput=document.getElementById('country-input');
let btnClickChange=document.getElementById('btnClickChange');
let tbCustomers=document.getElementById('customers');

function clickChange(){
    let ques1=Number(prompt('nhập số hàng'));
    let ques2=Number(prompt('nhập số ô'));
    let ques3=prompt('nhập nội dung sửa')
    for(let i=0;i<tbCustomers.rows.length;i++){
       if(ques1==i){
           let myCells=tbCustomers.rows[i].cells;
           for(let x=0;x<myCells.length;x++){
               if(ques2==x){
                  myCells[x].innerHTML=ques3
               }
           }
       }
    }
}
btnClickChange.addEventListener('click',clickChange)


let tbody=document.getElementById('ts-body')
function render(){
    for(let items of dataCustomer){
        let tr=`<tr><td>${items.id}</td><td>${items.Company}</td><td>${items.Contact}</td><td>${items.Country}</td></tr>`
        tbody.innerHTML+=tr;
    }  
}
render()