// we adding a condition to control the flow of the program

//if 
const ischeck = true;
if(2 == "2"){               // here we cant access data type
    console.log("Executed");
}

// <, >, <=, >=, ==, ===, !=, !==

const temp = 30;
if(temp < 20){
    console.log("It's cold outside");
}
else {(temp < 30)
    console.log("It's warm outside");
}

const Score = 95;                          //var power (var is global variable but it is problmatic sometimes because it can accessible in outside the)
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