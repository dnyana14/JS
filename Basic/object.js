//singleton 
// we will learn how to use symbol in keys of object (interview kind of question)
const mysym = Symbol("key1")   //symbol declaration  


const jsuser = {
    name: "jsuser",
    age: 20,
    [mysym] : "symbol value",                                  // symbol as key

    email : "dnyana@gmail.com",
    isloggedin : false,
    isactive : ["active", "inactive"],

}
console.log(jsuser.email); // this is the best way to access the value of key in object but sometimes we need to use barcket notation in case of symbol
console.log(jsuser["email"]);  
console.log(jsuser["age"]); 
console.log(jsuser[mysym]); // symbol as key   no need to add quotes

jsuser.email = "Sandil12@gmail.com"; // we can change the values of keys in object
//Object.freeze(jsuser); // now after using freeze () , it will not chanhe any values of object
jsuser.email = "mayu@gmail.com";  // this value is not inserted due to use of freeze() method
console.log(jsuser);

//function
jsuser.greeting = function (){
    console.log("Hello there");
}
console.log(jsuser.greeting()); // if you are not adding () at the end of function then it will be just reference of function

jsuser.greeting2 = function(){
    console.log(`Hello there, ${this.name}`); //this is used to refer the current object
}
console