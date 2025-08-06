// Map() methos creates new array with result of some operations
//map is a method used with arrays to create a new array by applying a function to each element of the original array.

//ForEach Used to perform an action on each element, but doesn't return anything, returns undefined.
// Map 	Creates a new array with modified data, return the new array.
//map is same as forEach but it returns a new array with the results of calling a provided function on every element in the calling array.


let array = [1, 2, 3, 4, 5];
array.map((element) => {
    console.log(element );  //here we are just logging the element
})


let newarray = array.map( function printsquare(val){
    return val * val;  //this will return a new array with the square of each element
})

console.log(newarray); // Output: [1, 4, 9, 16, 25]
console.log(array); // Output: [1, 2, 3, 4, 5] - original array remains unchanged

//filter() method
//using filter() method we can use only condition which are true

let arr = [ 1,2,3,4,5,6,7,8,9,10];
let newarr = arr.filter((val) => {
    return val % 2 === 0 ;
})
console.log(newarr)


//reduce () method of array
//it performs some operations and reduce the array to single value, it returns that single value
//reduce() method have two parameters which  first parameter is store first element in the array and second parameter stores second element in the array 

//ex.
let arr1 = [1,2,3,4];
let arr2 = arr1.reduce((res, curr) => { 
    return res + curr;      //here the addition of first and second element is happen then that addition of two values are store in res and curr will move to next element(third element) and add that into res 
})
console.log(arr2)

//to return a largest number from the array

let arr3 = [1,2,4,6,7,8,]
let arr4 = arr3.reduce((pre, curr) => {
    return pre > curr ? prev : curr ;  //It check the condition that if pre(1st element) is greater than curr(2nd element), return pre; if pre is not greater thatn curr then return curr
})
console.log(arr4)