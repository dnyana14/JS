//Prompt the user to enter their full name. Generate a user name for them based on the input
//start username with @, followed by their fullname and ending with a full name length
// e.g. name = dnyana gaikwad  output = @dnyanagaikwad10

let name = prompt("Enter your full name:");
let username = `@${name}${name.length}`;
//we can use concat method to concatenate strings
let user = "@" + name + name.length;
console.log(user);
console.log(username);