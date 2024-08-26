// Inheritance
class inherit_using_ES6 {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}
class Person extends inherit_using_ES6 {
  name = "Arun";

  printName = () => {
    console.log(this.name);
  };
}
// Object creation
const person = new Person();
person.printName();
person.printGender();
