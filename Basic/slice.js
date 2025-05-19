// array slice and splice
//Slice is used to return a section of array without modifying the original array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
console.log("A ", array)

const slicearray = array.slice(1 , 3)// slice array from index 1 to 3 , it will not include index 3 but include index 1
console.log(slicearray) 
console.log( "B",array) 

//Splice is used to add or remove elements from array
const splicearray = array.splice(1 , 3 ,"hey") // remove 3 elements from index 1 to 3 and add "hey" at index 1
console.log(splicearray) // removed elements from an array
console.log( "C",array) // original array is modified

