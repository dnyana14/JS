        //slice method to get a portion of the array

let arr = ["Sunil", "Dnyana", "Sagar", "Siddhi", "Shivani", "pruthvi"];
let slicedArray = arr.slice(0, 2);  //it will give array from 0 to 1 index
console.log(slicedArray);           //the output will be ["Sunil", "Dnyana"]
let slicearr = arr.slice(2);       //it will give array from 2 index to end
console.log(slicearr);
console.log(arr); // This is the original array, it will not be modified by slice method

       

        //remove element through splice method
let splicedArray = arr.splice(1, 3); // it will remove 2 elements starting from index 1
console.log(arr); // This is the modified original array after splicings
console.log(splicedArray); // This is the removed elements from the original array
console.log(arr)           // This is the modified original array after splicing
// the original array will be modified by splice method

//Add element through splice method
let spliceArray = arr.splice(1, 2, 56, 78 );// it will remove 2 elements starting from index 1 and add 56 and 78 
console.log(arr); 
console.log(spliceArray); // This is the removed elements from the original array


        //we can replace the elements as well
let arr1 = ["yes","no","why","who"]
 arr1.splice(1, 1, "NewElement"); // it will remove 1 element starting from index 1 and add "NewElement"
console.log(arr1); // This is the modified original array after replacing


// Remove all elements from a specific index to the end of the array
// This will modify the original array and remove elements from index 2 to the end
let arr2 = arr1.splice(2);// This will remove all elements from index 2 to end
console.log(arr2);  //this is the removed elements from the original array
console.log(arr1); // This is the modified original array after removing elements