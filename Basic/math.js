console.log(Math)
console.log(Math.abs(-4));  // it give output positive value of negative value and positive value remains same
console.log(Math.round(4.3));  // it gives round off value
console.log(Math.min(3,4,52,5))
console.log(Math.ceil(4.3)) // it take top value (output will be 5)
console.log(Math.floor(4.5)) // it take bottom value (output will be 4)

console.log(Math.random()); // it will give random value between 0 and 1
console.log(Math.random()*10); // after multiplying to 10 ,pointer  will shift to left 
// but sometimes if it is  the value = 0.1 then math.floor () will take value 0 and multipying it with 10 it will give 0 so we add 1 into it


console.log(Math.floor(Math.random()*10)); // it will give random value between 0 and 9 , it round off lowest value

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min ) // 1 is added to avoid 0 o/p

