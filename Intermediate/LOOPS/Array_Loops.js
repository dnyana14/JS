//for of loop 
// for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// It provides a simpler syntax compared to for...in loop and is more efficient for iterating over arrays.

const arr = [1, 2, 3, 4, 5];
for(const num of arr) {
    console.log(num);
}

const greeting = "Hello World!";
for(const char of greeting) {
    console.log(`${char} is a character in the string.`); 
}  


//Map  ==== MAp is not iterable with for...in loop, 
// map is object that holds key-value pairs 
// No duplicate keys allowed
//It remebers the original insertion order of the keys
const map = new Map()
map.set('In',"India")
map.set('USA', "United State of America")
console.log(map);

for(const key of map){  // key is an array of key-value pairs
    console.log(key); // prints the key-value pairs as arrays
}

for(const [key, value] of map){ // destructuring the key-value pairs
    console.log(key, ':-', value);  
}
// we cant use for...in loop for map as it is not an object
