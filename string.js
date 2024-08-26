// String primitive
const message = "This is my 'first message'";

// String Object
const another = new String("hi");
//console.log(typeof(message)+" "+typeof(another));
console.log(message.split(" "));

// Template literals - Back tick(``) character is an alternative for escape sequence
// ${another} - placeholder
const message1 = `This is my
first message ${another} `;
console.log(message1);
