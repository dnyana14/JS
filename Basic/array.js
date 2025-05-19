const newarray = [2, 3, 4, 5, 6, 7, 8, 9, 10 , true, "hii"]; // we can add any type of data in array

const newarray1 = new Array(2, 3, 4, 5); 
console.log(newarray1[2])

//array methods

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array of numbers
array.push(11); // add element at the end of array
array.push(12);
array.pop(); // remove last element of array
console.log(array)

array.unshift(0); // add element at the start of array , all array elements will shift to right
console.log(array)
array.shift(); // remove first element of array
console.log(array)

console.log(array.includes(2)); // check if element is present in array
console.log(array.indexOf(2)); // check index of element in array
console.log(array.lastIndexOf(3)); // check last index of element in array

const array1 = array.join()
console.log(array1) // convert array to string
console.log(array)
console.log(typeof array1) // check type of variable

