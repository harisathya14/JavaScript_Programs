// Primitives - are copied by their value
let x = 10;
let y = x;

x = 20;
// x = 20, y = 10;

// Objects - are copied by their reference
let x1 = { value: 10 };
let y1 = x1;
x1.value = 20;
// x1 = 20, y1 = 20

// Reference types
let obj = { value: 10 };
function increase(number) {
  obj.value++;
}

increase(obj);
console.log(obj);
