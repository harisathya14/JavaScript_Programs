// Inheritance
class inheritance {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}
class Person extends inheritance {
  constructor() {
    super();
    this.name = "Arun";
  }

  printName() {
    console.log(this.name);
  }
}
// Object creation
const person = new Person();
person.printName();
person.printGender();
