const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // spread operator
console.log(newNumbers);

const person = {
  name: "Arun",
};

const newPerson = {
    ...person,
    age: 28
};
 

console.log(newPerson);
