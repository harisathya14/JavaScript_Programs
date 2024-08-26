let name = 'Aravind';
console.log(name);

const interestRate = 0.3;
console.log(interestRate);

let person = { name: 'Aravind', age: 30 };
person.age = 25;
console.log(person);

person['name'] = 'Arun';

console.log(person.name);

let selectedColors = ['red','blue'];
selectedColors[2] = '1';
console.log(selectedColors);

function greet(name) {
    console.log('Hello ' + name);
}

greet('Aravind');

// Lose Equality
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Strict Equality Operators
console.log(1 === 1);
console.log('1' === 1);




