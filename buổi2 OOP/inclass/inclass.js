// 1, encapsulation - tính bao đóng

class Human {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    /* Encapsulation */
    set name(value) {
      this._name = value;
    }
    get name() {
      return this._name;
    }
  
    set age(value) {
      this._age = value;
    }
    get age() {
      return this._age;
    }
    /* -- */
  
    walk() {
      return `${this._name} is walking`;
    }
  
    /* Polymorphism */
    getString() {
      return `${this._name} is ${this._age} year old`;
    }
  
    /* -- */
  }
  
  // child class
  class Employee extends Human {
    constructor(name, age, subject) {
      super(name, age);
      this._subject = subject;
    }
    get subject() {
      return this._subject;
    }
    set subject(value) {
      this._subject = value;
    }
    getString() {
      return `${this._name} is ${this._subject} man`;
    }
  }
  
  class Animal {
    speak() {
      throw "Subclass must implement abstract method";
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super();
      this._name = name;
    }
  
    speak() {
      console.log("meo meo");
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super();
      this._name = name;
    }
  
    speak() {
      console.log("go go");
    }
  }
  
  const newCat = new Cat("nnn");
  const newDog = new Dog("nnn");
  // newCat.speak();
  // newDog.speak();
  
  const human = new Human("nnn", 1);
  
  const clara = new Employee("Clara", 33, "indigo");
  
  console.log(human.getString());
  console.log(clara.getString());
  
  