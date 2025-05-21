function calculateCartprice(num1, ...num){      // ... is the rest operator means that it will take all the arguments passed to the function and put them in an array
    return num1
}
console.log(calculateCartprice(100, 200, 300, 400)) 
// here num1 is stored value 100 and remaining values are stored in num array because of rest operator

const user = {
    username: "John",
    password: "1234",
}

function login(userinfo){
    console.log(`This is the username: ${userinfo.username} and this is the password: ${userinfo.password}`)    

}
login(user) // here we are passing the object user to the function login and it will print the values of the object


// we can add object directly in the function no need to create it outside
//passing object within the function
login({
    username : "John",
    password : "1234"
}) // here we are passing the object directly to the function login and it will print the values of the object

//passing array within the function

const mynewarray = [1, 2, 3, 4, 5]
function returnArray(getarray){
return getarray
}
console.log(returnArray(mynewarray)) // here we are passing the array to the function returnArray and it will print the values of the array
//two ways to pass array directly in the function and outside the function
console.log(returnArray([1, 2, 3, 4, 5])) // here we are passing the array directly to the function returnArray and it will print the values of the array


