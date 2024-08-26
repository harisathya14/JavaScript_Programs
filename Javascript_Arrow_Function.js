// Normal Function
function printMyName1(name) {
  console.log(name);
}

// Arrow Function
const printMyName = (name) => {
  console.log(name);
};

printMyName("Aravind");

// No Argument Arrow function
const printMyName2 = () => {
  console.log("Arun");
};

const multiply = (number) => {
  return number * 2;
};

const multiply1 = (number) => number * 2;
console.log(multiply1(2));
