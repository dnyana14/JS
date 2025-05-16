let value = 3
let negativevalue = -value
console.log(negativevalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)    

//we can add string as
let str1 = "Dnyana"
let str2 = "Gaikwad"
let str3 = str1 + str2
console.log(str3) // DnyanaGaikwad

console.log("1"+2) // 12
console.log(1+2+"3") // 33
console.log("1"+2+3) // 123

console.log(+true) // 1   not preffer this
console.log(+false) // 0
console.log(+"") // 0
console.log(+null) // 0
console.log(+undefined) // NaN
console.log(+[]) // 0
console.log(+{}) // NaN

let x = 3;
const y = x++; // x++(postfix Incrementation) , then it will be return the value before increment
console.log(x)// 4
console.log(y)  // 3

let z = 5
const w = ++z; // ++z (prefix incrementation), then it will be return the value after increment
console.log(z) // 6
console.log(w) // 6

