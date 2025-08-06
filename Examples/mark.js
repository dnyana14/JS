//for a given array with marks of student -> [85,97, 44, 37, 76, 60]
//find the avg marks of the entire class

const arr = [85, 97, 44, 37, 76, 60];
let add = 0;
for( let i of arr){ //here i takes individual values of arr in each iteration
                    // the value inside arr is assigned to i in each iteration
    console.log(i);
 
    add = add+i;    //here we are adding the value of i to add and we get the sum of all elements
}
console.log("The average marks of the class is: " , add/arr.length);



const array = [85, 97, 44, 37, 76, 60];
let sum = 0;
for( let i = 0; i<array.length; i++){ // here i is the index of the array, it starts from 0 and goes till array.length-1 and it accesses each element of the array
    sum += array[i]; // here we are adding the value of array[i] to sum
}
 let length = array.length; // here we are getting the length of the array
let average = sum / length; // here we are calculating the average by dividing the sum by length
console.log("The average marks of the class is: " , average); // here we are printing the average
