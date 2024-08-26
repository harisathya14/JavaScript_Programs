// Objects - OBJECT ORIENTED PROGRAMMMING

const circle1 = createCircle(1);
console.log(circle1);

// Factory function - create an object
function createCircle(radius) {
  return {
    radius: radius,
    draw() {
      console.log("draw");
    },
  };
}
// Creating an object
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// Constructor function - create an object
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const Circle1 = new Circle(10);
console.log(Circle1);

// Dynamic nature of objects
const circleNew = {
  radius: 1,
};

circleNew.new = 2;

console.log(circleNew);

//Exercise1 - Address Object
let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

// Excerise1 continuation - Factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let address1 = createAddress("a", "b", "c");
console.log(address1);

//Excerise 1 continuation - Constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address2 = new Address("a", "b", "c");
console.log(address2);

// Object Equality

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address2.zipCode === address2.zipCode
  );
}
// Referencing the same object or not
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address1, address2));
console.log(areEqual(address1, address2));

// Exercise 2 - Blog post object

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    {
      author: "a",
      body: "b",
    },
  ],
  isLive: true,
};

console.log(post);

// Exercise 2 - Blog post object continuation
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comments = [];
  this.isLive = false;
}
let functionCall = Post("a", "b", "c");
console.log(functionCall);
