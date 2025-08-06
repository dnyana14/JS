const name = "Dnyana"
const repocunt = 10
console.log(`Hello! My name is ${name} and my repocount is ${repocunt}` )  //this is called string interpolation, here we can use any variable inside the string using ${} and we can also use any expression inside it

// other way to write string

const otherway = new String("Hello")   // another way to create string ; object is used to create string using new keyword
console.log(otherway[3]) // [String: 'Hello'] 
console.log(otherway.length) 
console.log(otherway.charAt(3)) // l whatever index you give it will give that character
console.log(otherway.indexOf("l")) // it gives output of first l index number


const newstr = otherway.substring(1, 4) // it will give the string from index 1 to 4
console.log(newstr)


//trim()method 
const newstr3 = "  Hello  "
console.log(newstr3)
console.log(newstr3.trim()) // it will remove the space from start and end of the string // it will remove the space from start and end of the string but in between the string it will not remove the space


//replace () method
let str = "Hello World"
str = str.replace("World", "Dnyana") // it will replace the first occurrence of World with Dnyana

console.log(str) // Hello Dnyana
console.log(str.replace("l", "")); 

let str2 = "Helololo"
console.log(str2.replace("lo", "")); // it will only replace the first occurrence of lo with empty string

