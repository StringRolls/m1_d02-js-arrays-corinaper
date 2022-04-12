// Class code examples
// Array - ordered list of things
const myNewArray = []; //declare arrays as conss

myNewArray[0]="hola";
myNewArray.push("como estas?");
console.log(myNewArray);
delete myNewArray[1];

let changeableLable = ["this array has an unprotected label"]
changeableLable = ["ooops, I lost the original array"]
console.log(changeableLable);

// An aray is an ORDERED list of thing
const drinks = [
    "Agua",
    "Coca-cola",
    "Aquarius",
    "Fanta",
    "Cacaolat",
    "Jagger",
    "Red Bull",
    "Cervemocho",
  ];

  // Access
console.log("First drink is ", drinks[0]);
console.log("Second drink is ", drinks[1]);
//Change order of elements
const firstEl= drinks[0];
const fifthEl = drinks[5];
drinks[5]=firstEl;
drinks[0]=fifthEl;
console.log("First drink is ", drinks[0]);
console.log("Second drink is ", drinks[1]);

// Length
console.log(`We have ${drinks.length} drinks in total`)

// Arrays can contain anything
const bagOfThings = ["I am a string", 78547, null, undefined, true, ["I am a subarray"], {tpe:"Object inside array"}]
console.log("bagOfThings contains:", bagOfThings.length, "elemnts");
 
//.push() and .pop()
// Adding values (last) ---- declarative
console.log("return value from .push(): ", drinks.push('Nestea', 'Monster'));
console.log('...extended even more:', drinks);

console.log("return value from .pop(): ", drinks.pop());
console.log("now the drinks are", drinks);

//Modifying elements order or values
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log("The first 5 months", months);
months.splice(4, 0, "May");
months.push("July", "August", "September", "October", "November", "Dicember");
console.log("The months", months, months.length);

// Split text into array
const string = 'Lorem ipsum dolor sit amet'
const words = string.split(' ')
console.log('Here is each word in the string:', words);

console.log("Hola mundo!".split(""))

