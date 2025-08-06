//create a function using the "function" keyword that takes string as an argument & return a number of vowels in the string
// create arrow function as well

function countvowel(str){
    let count = 0;
    for (let char of str){
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u")
            {
            count++;
        }

    }
    console.log(count);
}
countvowel("aeida");

//through arrow function 

const countvowels = (str) => {
    let count = 0
    for ( let char = 0; char<= str.length; char++){
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u")
            {
            count++;
        }
        }
        console.log(count);    
}

countvowel("aeida");


