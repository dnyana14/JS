//while = check first, then run, condition check first & then code will exwcute,  when you dont know how many times you want to repeat something, here condition check before loop start
//do...while = "run first, then check"
//A for loop is used when you know how many times you want to repeat something. here condition check before loop start
//for...in loop Used to get keys (indexes or property names) from objects or arrays.
//for...of loop Used to get values from arrays, strings, maps, sets, etc.
//forEach doesn’t work on objects, only on arrays.

let index = 0;
while(index <= 10){

console.log(`Value of index is ${index}`);
index++;   //index = index + 2; // it will print 0,2,4,6,8,10


}


let array = ["Batsman", "Superman", "Ironman", "Hulk", "Thor"];

let arr = 0;
while(arr < array.length){
    console.log(`Value of array ${array[arr]}`);
    arr++;  // arr = arr + 1;
}

let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayy = 0;

while(array < arrayy.length){
    console.log(`Value of array : ${myarray[arrayy]}`);
    arrayy++;  // arrayy = arrayy + 1;
}


//do while loop

let marks = 1;
do{
    console.log(`Marks are ${marks}`);
    marks++;
} while (marks <= 10);

let score = 11;
do {
    console.log(`Score value is ${score}`);  // it will print 11 and the check the condition
    score++;
} while(score <= 10); // it will check the condition after executing the block of code at least once 

//note : first initilization is declared in the part of variable declaration and then increment is done in the body of the do loop
// do while loop is used when we want to execute the code at least once even if the condition is false
// in while loop the condition is checked first and then the code is executed, if the condition is false then the code will not be executed