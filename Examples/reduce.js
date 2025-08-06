//take a number n as input from the user. 
//create an array of numbers from 1 to n.
//use the reduce method to calculate sum of all numbers in the array
// use the reduce method to calculate product of all numbers in the array

let n = prompt("Enter a number : ");
let arr = [];

for(let i = 1; i <= n; i++ ){ // loop starts from 1
    arr[i-1] = i;            // here the number entered from user is placed from the index 0
}
console.log(arr);


let arr1 = arr.reduce((pre, curr) => {
    return pre + curr ;
})
console.log(arr1);     //using reduce method to calculate the sum of all numbers

let arr2 = arr.reduce((pre, curr) => {
    return pre * curr;
})
console.log(arr2)

