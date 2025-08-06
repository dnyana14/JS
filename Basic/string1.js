let str = "Hello World";
str[0] = "l";
console.log(str); // it will not change the string, strings are immutable in JavaScript
//so we cannot change the character at a specific index in a string
//we need to create a new string if we want to change it

str = str.replace("H", "l"); // we can create a new string with the replaced character
                             //you're just updating the variable str with a new string
console.log(str); // ello World, now the first character is changed to 'l'