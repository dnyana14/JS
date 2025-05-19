const marvel = ["marvel", "spiderman", "ironman"];
const dc = ["dc", "batman", "superman"];
const hero = marvel.concat(dc);
console.log(hero); // ["marvel", "spiderman", "ironman", "dc", "batman", "superman"]
const sep = [...marvel, ...dc];     //individual array will be separated by comma
console.log(sep); // ["marvel", "spiderman", "ironman", "dc", "batman", "superman"]

const arr = ["marvel", "spiderman", "ironman",["HII","BYe"],["Nima", "Ravi", "Nashit"]];
const arr1 = arr.flat(Infinity) // return a new array with all sub-array elements concatenated into it
console.log(arr1);

console.log(Array.isArray(arr)); // true , it will check if the variable is an array or not
console.log(Array.from("Nashit")); // it will convert the string to array(interview type question)

let score = 100;
let score1 = 200;
let score2 = 300;
console.log(Array.of (score, score1, score2)); // it will create a new array with the given arguments