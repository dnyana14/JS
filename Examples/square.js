
//for a given array of numbers, print the square of each number using forEach loop

let array = [1, 2, 3, 4, 5];


array.forEach(function printsquare(num){
    console.log(num * num); // console.log("the square of ", num , "is :" num*num)
    
})

for(let i = 0; i <= array.length; i++){
  let square = i*i;
  console.log("Square of array is ", square );
}

// let array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//     let num = array[i];
//     let square = num * num;
//     console.log("The square of", num, "is", square);
// }

let calsqr = (num) => {
    console.log(num*num)

}
array.forEach(calsqr)