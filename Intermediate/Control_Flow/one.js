// we adding a condition to control the flow of the program
// Control Flow refers to the order in which the instructions or statements in a program are executed.

// By default, a program runs from top to bottom, line by line.
// But with control flow statements, we can change that order — to repeat, skip, or choose different instructions based on conditions.
// Control flow statements allow us to control the execution of code based on certain conditions or loops.


//Types of Control Flow Statements:
// 1. Conditional Statements
// Used to make decisions based on conditions.
// if, else if, else

// 2. Looping Statements
// Used to repeat code.
// for, while, do...while, for-each

// jump Statements
// Used to change the flow suddenly.

// break, continue, return

const ischeck = true;
if(2 == "2"){               // here we cant access data type
    console.log("Executed");
}

// <, >, <=, >=, ==, ===, !=, !== are comparison operators which are used to the control the flow of the program

const temp = 30;
if(temp < 20){
    console.log("It's cold outside");
}
else {(temp < 30)
    console.log("It's warm outside");
}

const Score = 95;                          //var power (var is global variable but it is problmatic sometimes because it can accessible in outside the scope as well)
if (Score >= 90){
    const power = "Fly"
    console.log(`User power ${power}` );
}

const balance = 1000
if(balance > 500) console.log("Test");  // implicit scope = azuming that it has scope  (we can add more console.log with implimenting comma)
// this is not a proper way to write a code of if else statement // unreadable code


const bal = 10000
if(bal <4000) {
    console.log("Low Balance");
}   else if(bal < 8000) {
    console.log("Medium Balance");
}
else if(bal < 12000) {
    console.log("High Balance");
}   


const userloggedIn = true;
const debitCard = true;
const userloggedInfromEmail = false;
const userloggedInfromPhone = false;;

if(userloggedIn && debitCard) {  // logical operator // user has to be logged in and has debit card to access the account
                 // If both conditions are true, then the code inside the block will execute, If either condition is false, the code will not execute.
    console.log("You can access your account");
}

if (userloggedInfromEmail || userloggedInfromPhone){
    console.log("You can access your account from email or phone");
}