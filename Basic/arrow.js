const user = {
    name : "Dnyana",
    age : 20,
   
    greeting : function(message){
    
        console.log(`I'm ${this.age} years old, Hii from ${this.name}`);   //this refers to the current context
    }
}
user.greeting();
console.log(user.name);
user.name = "Dnyana Patil";
user.greeting();   //this refers to the current context



// we cant use this function in function 

function chai2(){
let user =  "Dnyana"
console.log(this.user)  // o/p will be undefined   we cant use this function in function


}

const chai3 = () => {
    let username = "Dnyana";
    console.log(this);
}

// actual arrow function 

const chai4 = (num1, num2) => {
    return num1 + num2             //explicit return
}
 console.log(chai4(10,15));

 // another way of writing arrow function

 const chai5 = (num3, num4 ) => num3 + num4;    //implicit return where we dont use return keyword
    console.log(chai5(20,30));

// other way to write arrow function

const chai6 = (num0, num7) => (num0 + num7) * 2;  // implicit return with expression
console.log(chai6(10, 20));

//arrow function with returning object

const chai0 = () => ( {username: "Dnyana", roll_no: 30, std: "10th"} );  // we need to use paranthesis to return object

console.log(chai0( ))

//array 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 array.foreach()                                //we can use arrow function, functions and methods into forEach method

 