
// class Human{
//     constructor(name, age,created_at){
//         this._name=name;
//         this._age=age;
//         this.created_at=created_at;
//     }
//     get name(){
//         return  this._name;
//     }
    
//     set name(value){
//         this._name=value
//     }
    
//     get age(){
//         return  this._age;
//     }
    
//     set age(value){
//         this._age=value
//     }

//     get created_at(){
//         return  this._created_at;
//     }
    
//     set created_at(value){
//         this._created_at=value
//     }
    
// }

// let arrayHuman=[];
// const Name=prompt("Nhập tên:");
// const Age=prompt('Nhập tuổi:')
// const createdAt=prompt('Nhập ngày:')

// const newHuman = new Human(Name, Age, createdAt);
// arrayHuman.push(newHuman);
// console.log(arrayHuman);
// console.log(`New Human is ${arrayHuman[0].name}; ${arrayHuman[0].age} years old and created at ${arrayHuman[0]._created_at}`);

// class Human{
//     homeTown(){
//          "Việt Nam"
//     }
// }

// class Man extends Human{
//     constructor(name){
//         super();
//         this._name=name
//     }

//     homeTown(){
//         console.log('Hải Phòng');
//     }
// }

// class Woman extends Human{
//     constructor(name){
//         super();
//         this._name=name
//     }

//     homeTown(){
//         console.log('Hà Nội');
//     }
// }

// const newMan = new Man("Sài Gòn");
// console.log({newMan});
// const newWoman = new Woman("Quảng Ninh");
// console.log({newWoman});


// class Vehicle {
//     constructor (color, wheel, weight, countPersonMove) {
//         this._color = color;
//         this._wheel = wheel;
//         this._weight = weight;
//         this._countPersonMove = countPersonMove;
//     }

//     set color(color){
//         this._color = color;
//     } 

//     get color() {
//         return this._color;
//     }

//     set wheel(wheel){
//         this._wheel = wheel;
//     } 

//     get wheel() {
//         return this._wheel;
//     }

//     set weight(weight){
//         this._weight = weight;
//     } 

//     get weight() {
//         return this._weight;
//     }

//     set countPersonMove(countPersonMove){
//         this._countPersonMove = countPersonMove;
//     } 

//     get countPersonMove() {
//         return this._countPersonMove;
//     }

//     speak() {
//         console.log("beep beep");
//     }
// }

// class car extends vehicle {
//     constructor(color, wheel, weight, countPersonMove, energy){
//         super(color, wheel, weight, countPersonMove);
//         this._energy = energy;
//     }

//     set energy(energy){
//         this._energy = energy;
//     } 

//     get energy() {
//         return this._energy;
//     }
// }

// class bicycle extends vehicle {
//     constructor(color, wheel, weight, countPersonMove){
//         super(color, wheel, weight, countPersonMove);
//     }

//     speak() {
//         console.log("ring ring");
//     }
// }


// class person {
//     constructor(name, age, gender) {
//       this._name = name;
//       this._age = age;
//       this._gender = gender;
//     }
  
//     set name(name) {
//       this._name = name;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set age(age) {
//       this._age = age;
//     }
  
//     get age() {
//       return this._age;
//     }
  
//     set gender(gender) {
//       this._name = gender;
//     }
  
//     get gender() {
//       return this._gender;
//     }
//   }
  
//   const listPerson = [];
  
//   const processAdd = () => {
//     const name = prompt("Enter name:");
//     const age = prompt("Enter age:");
//     const gender = prompt("Enter gender:");
//     if (name == "" || age == "" || gender == "") {
//       alert("Not Input All!");
//     } else {
//       let newPerson = new person(name, age, gender);
//       listPerson.push(newPerson);
//       console.log(listPerson);
//       addHTML(newPerson);
//     }
//   };
  
//   const addHTML = (newPerson) => {
//     document.querySelector("#profile").insertAdjacentHTML(
//       "beforeend",
//       `
//       <tr>
//           <td class="profile_name">${newPerson.name}</td>
//           <td class="profile_age">${newPerson.age}</th>
//           <td class="profile_gender">${newPerson.gender}</td>
//         </tr>
//       `
//     );
//   };


let a='1$' + '1$';
const x=Number('1$');
a=x+x;
console.log(a);
  


