// for Each loop 

//You can use for-each with strings to iterate over characters in JavaScript, Python, Java, etc.
//It is useful when you just want to read each character.
//forEach doesn’t work on objects, only on arrays.

//forEach is a built-in function in JavaScript used to run a function on every item in an array, one by one.
//It is used only with arrays and it does not return anything (just executes the code).


//callback is the function to execute for each element in array, it is passed as argument for each function
//callback is called for each element in the array, and it receives three arguments: the current element, the index of the current element, and the array itself. (val, index, arr)


//Higher order function is a function that takes another function as an argument or returns a function as its result. 
//forEach is a higher order function Because it works with other functions — just like variables
let arr = [1,2,3,4,5,6,7];
arr.forEach(function printval(val){
    console.log(val);
})

let cities = [ "pune","mumbai", "nagpur", "satara"];
cities.forEach( function print(val) {
    console.log(val.toUpperCase())
  
} )

cities.forEach((value) => {
    console.log(value.toLowerCase())
})