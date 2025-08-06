// string is sequence of characters to represent text

//escape character is used to escape the special characters in string


console.log("Dnyana\nGaikwad") //\n is used to create a new line
let str = "Hello\tDnyana"; //\t is used to create a tab space 
console.log(str.length);   // here \t is counted as one character

//string methods
//toUpperCase() and toLowerCase() 
 let name = "Dnyana"
 console.log(name.toUpperCase()) // DNYANA
console.log(name.toLowerCase()) // dnyana
console.log(name); // original string is not changed

//methods create a new string and return it, they do not change the original string
//because strings are immutable in JavaScript
// so we have to assign the new string to the same variable or a new variable

//slice() method
const string = "HelloWorld";
console.log(string.slice(0, 5)) // Hello, it will not include the character at index 5
console.log(string); // original string is not changed
console.log(string.slice(-5)) // World, it will give the last 5 characters of the string
console.log(string.slice(2)) // it will print string from index 2 to the end.

//concatation, it will join two strings together
console.log(name.concat(string))// DnyanaHelloWorld

// we can use + operator to concatenate strings
console.log(name +"" + string) ;//"" is used to add a space between the two strings
let res = name + 14 // it will convert 14 to string and concatenate it with name
console.log(res) // Dnyana14

//charAt() method
console.log(string.charAt(0)) // H, it will give the character at index 0
console.log(name.charAt(1))

