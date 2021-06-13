class Employee {
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }

}

export default Employee