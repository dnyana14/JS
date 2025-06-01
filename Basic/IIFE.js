
function Hello(){   // named IIFE function
    console.log(`DB CONNECTED`);    
}
Hello();

(function(){
    console.log(`IIFE FUNCTION`);
})();    // to write two IIFE functions, we have to add comma at the end of the first function and then we can run the second function 

// another to write a function which will not require a name to call it,
// it will run immediately after the declaration
// this is an IIFE function, it will run immediately after the declaration


//sometime there is problem with global scope, so we use IIFE function to avoid that
//the polution of global scope is avoided by using IIFE function
// () is used to call the function immediately after the declaration and another () is used to call the function


//arrow function
((Name) => {
    console.log(`HII from ${Name}`);
})('Dnyna Gaikwad');
// we can pass the parameter through the second () and it will be passed to the arrow function