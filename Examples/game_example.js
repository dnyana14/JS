//create a game where you start with any random number. Ask user to keep guessing the number until the user enters correct values


let gamenumber = 80;

let usernumber = prompt("guess the number :")

while( usernumber != gamenumber){
    usernumber = prompt("wrong guess, try again :")
}
console.log("Congratulations! You guessed the number correctly.");