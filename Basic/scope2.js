function one(){
    const username = "John";

    function two(){
       const website = "Google";
       console.log(username); // it will print the value of username because it is in the outer function scope  
    }
   // console.log(website); // it will give an error because website is not defined in this scope 
    two(); // this will call the inner function and it will print the value of username
}
one(); // this will call the outer function and it will print the value of username


if(true){
    const username = "John";
    if(username === "John"){
        const website = "REVA";
        console.log(username + website); // it will print the value of website because it is in the inner function scope

    }
}


///interesting part

function addone (num){
    return num + 1
}

addone(5) // this will return 6   .....it will not print anything
console.log(addone(5)) // this will print 6 because we are printing the value of addone function

const addtwo = function(num){   // this is function but sometimes it is also called as expression
return num + 2
}
addtwo(5) // this will return 7  ....it will not print anything