// Conditional statements
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good evening");
}

// Switch Case
let role;
switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
}

// For statement
for (let i = 0; i < 10; i++) {
  console.log("Hello");
}

// While statement
let i = 0;
while (i < 5) {
  console.log("while");
  i++;
}

// Do while
let j = 0;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

// For In
const person = {
  name: "Aravind",
  age: 20,
};

for (let key in person) {
  console.log(key, person[key]);
}

// For Of
const colors = ["red", "blue"];
for (let color of colors) {
  console.log(color);
}

// Cloning an object - Method 1
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another2 = {};
for (let key in circle) {
  another2[key] = circle[key];
}

//console.log(another);

// Cloning an object - Method 2
const another = Object.assign({ color: "yellow" }, circle);
console.log(another);

// Cloning an object - Method 3
const another1 = { ...circle };
console.log(another1);
