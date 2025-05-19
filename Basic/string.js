const name = "Dnyana"
const repocunt = 10
console.log(`Hello! My name is ${name} and my repocount is ${repocunt}` )  //this is called string interpolation, here we can use any variable inside the string using ${} and we can also use any expression inside it

// other way to write string

const otherway = new String("Hello")   // another way to create string ; object is used to create string using new keyword
console.log(otherway[3]) // [String: 'Hello'] 
console.log(otherway.length) 
console.log(otherway.charAt(3)) // l whatever index you give it will give that character
console.log(otherway.indexOf("l")) // it gives output of first l index number
console.log(otherway.toUpperCase())

const newstr = otherway.substring(1, 4) // it will give the string from index 1 to 4
console.log(newstr)

const newstr2 = otherway.slice(0, 3) // it will give the string from index 0 to 3
console.log(newstr2) // Hel
console.log(otherway.slice(-3)) // llo

const newstr3 = "  Hello  "
console.log(newstr3)
console.log(newstr3.trim()) // it will remove the space from start and end of the string