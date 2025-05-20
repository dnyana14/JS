//declarin object in two ways

const obj = new Object() //this is singleton object , singleton means only one instance of object is created 

const obj2 = {} //this is non singleton object , non singleton means multiple instance of object is created
obj2.name = "jsuser"
obj2.age = 20

console.log(obj2); 

const regularobject = {
    email : "Dnyana@gmail.com",
    fullname :{
        username : {
        first : "Dnyana",
        last : "Kumar"
        }
    }
}

console.log(regularobject.fullname);
console.log(regularobject.fullname.username.first); // this is how we can access the value of key in object