//data-types = Primptive : boolean, number, string, undefined, null , symbol, Bigint
// non-primitive : object, array, function

//Symbol  (unique value)
let sym1 = Symbol("Hello")
let sym2 = Symbol("Hello")
console.log(sym1 == sym2) // false

//bigint
const num = 2345673434

//arrays
const arr = [1, 2, 3, 4, 5]

//objects
let obj = {
    name: "Dnyana",
    age: 20,

}
console.log(obj.name) // Dnyana
console.log(obj.age) // 22
console.log(obj) // { name: 'Dnyana', age: 22 }

//function
const func = function () {
    console.log("Hello")
}

// primptive = stack (data of primptive type is store in stack)
//nonprimtive = heap (data of non primtive type is store in heap)
// heap = dynamic memory allocation (whatever we change in heap will be reflected in the original data)
// stack = static memory allocation (whatever we change in stack will not be reflected in the original data)(It displays copy of the data whatever it is changed)

let ytchannel = "dnyana"
let anotherchannel = "ytchannel"
console.log(ytchannel) // dnyana
console.log(anotherchannel) // ytchannel 

//heap  (returns reference of original value)
let ytchannel1 = {
    name: "dnyana",
    subs: 1000
}
let anotherchannel1 = ytchannel1
anotherchannel1.subs = 2000
console.log(ytchannel1) // { name: 'dnyana', subs: 2000 }