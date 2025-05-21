let a = 30

if(true){
    let a = 200
    const b = 300                                           // whatever the data inside the {} is called block scope
    console.log(a) // here a is 200 because of block scope
}
console.log(a) // here a is 30 because of block scope