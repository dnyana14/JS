// Concatinate the object with the help of Object.assign() and spread operator
// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
obj1 = {1 : 2, 2 : 3, 3 : 4};
obj2 = {6 : 7, 8 : 9, 2 : 7};
obj3 = {3 : 7, 4 : 8, 0 : 9};

obj4 = Object.assign({}, obj1, obj2, obj3); // concatenate the object, {} is target object and all other objects are source object which store in the target object
console.log(obj4); 

const obj5 = {...obj1, ...obj2, ...obj3}; // this is also concatenate the object , easy way to concatenate the object
console.log(obj5);

// aaray of object
const users = [
    {
        id : 1,
        name : "Dnyana",
        age : 20,
        email : "dnyana@gmail.com"
    },
    {

    },
    {

    }
]
//users.[1].email
console.log(users[0].email); // this is how we can access the value of key in object
console.log(typeof users);


console.log(Object.keys(obj1)); // this will give the keys of object

console.log(obj1.hasOwnProperty(1)); // this will check the object has the key or not       