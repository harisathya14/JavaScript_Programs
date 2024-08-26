// Landscape or Portrait
function isLandscape(width, height) {
  if (width > height) return true;
  return false;
}

//let boolean = isLandscape(12, 34);
// console.log(boolean);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;

  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  return input;
}

console.log(fizzBuzz(false));
