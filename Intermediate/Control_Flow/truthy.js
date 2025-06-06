const email = "Dnyana@12.ai"

if(email){
    console.log("User is logged in");
}
else{
    console.log("User is not logged in");
}

// Truthy and Falsy values in JavaScript
// Falsy values: false, 0, "", null, undefined, NaN, negative values, -0, 0n

// Truthy values: true, 1, "0"(0 in quote in truthy value), "false", [], {}, " "(here you add space between quotes), -1, Infinity, -Infinity, 0n

//Array
const arr = [1, 2, 3];
if(arr){
    console.log("Array is truthy");
}

//if array is empty
const emptyArr = [];
if(emptyArr === 0){
    console.log("Empty array is truthy");
}

//Object
const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Empty obj ");
}


//nullish Coalescing operator (??)
// It is used to provide a default value when the left-hand side is null or undefined.

let val1;
val1 = 5 ?? 10; // Here, val1 will be 5 because it is not null or undefined.
val1 = null ?? 10; // Here, val1 will be 10 because the left-hand side is null.
val1 = undefined ?? 15; // Here, val1 will be 15 because the left-hand side is undefined.
val1 = null ?? 10 ?? 15; // Here, val1 will be 10 because the first value is null, and the second value is used as a default.
console.log(val1); // 5 

//Ternary Operator

//condition ? true : false;
const iceprice = 10;
iceprice > 50 ? console.log("Icecream is expensive") : console.log("Icecream is cheap");
