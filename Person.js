class Person {
  constructor() {
    this.name = 'Arun';
  }

  printName(){
    console.log(this.name)
  }
  
}
// Object creation
const person = new Person()
person.printName();
