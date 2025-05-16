let score = 33

console.log(typeof score); // number

let valueInNumber  = String(score)
console.log(typeof valueInNumber); // string
console.log(valueInNumber); // "33"

let value = null // print o/p as object
console.log(typeof value); // object

let number = undefined
console.log(typeof number); // undefined

// "33" => 33
//"33abc" => NaN
//true => 1, false => 0

let loggedIn = "try"
let BooleanValue = Boolean(loggedIn)
console.log(BooleanValue); // true
let loggedIn1 = ""
let BooleanValue1 = Boolean(loggedIn1)
console.log(BooleanValue1); // false
let loggedIn2 = 0
let BooleanValue2 = Boolean(loggedIn2)
console.log(BooleanValue2); // false
let loggedIn3 = 1
let BooleanValue3 = Boolean(loggedIn3)
console.log(BooleanValue3); // true
let loggedIn4 = null            
let BooleanValue4 = Boolean(loggedIn4)
console.log(BooleanValue4); // false
let loggedIn5 = undefined
let BooleanValue5 = Boolean(loggedIn5)
console.log(BooleanValue5); // false
let loggedIn6 = NaN         
let BooleanValue6 = Boolean(loggedIn6)
console.log(BooleanValue6); // false