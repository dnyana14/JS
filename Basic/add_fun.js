//function is block of code that performs specific task, can be invoked whenever it needed 
//parameter in the functions are local variable which are only used in the block of code of function

function add(num1 , num2){
    sum = num1 + num2 ;
    console.log(sum);
    //return sum;
}
add(2 , 5);

// arrow function

// const arrowfun = (a,b) => {
//  sum = a + b;
//  return sum;
// }
// arrowfun( 4, 5); // it should have to run on console ..I have to check is this run on terminal or not

//single line code for arrow function

const hello = () => console.log("Hello"); // but generally we have to use {}bracket