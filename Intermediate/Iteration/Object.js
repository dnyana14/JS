// Iterating over an object using for...in loop
// for...in loop is used to iterate over the properties of an object
// It iterates over the keys of the object
// It is not recomme nded to use for...in loop for arrays as it iterates over the indices of the array   
// It is recommended to use for...of loop for arrays

const myobj = {
    game1: 'Cricket',
    game2: 'Football',
    game3: 'Hockey',
    game4: 'Tennis'
}

for (const key  in myobj) {
    console.log(key); // prints the key of each key in the object
    console.log(myobj[key]); // prints the value of each key in the object
}
for(const key in myobj) {
    console.log(myobj[key]);// prints the value of each key in the object  
    console.log(key); // prints the key of each key in the object
    console.log(`${key} is the game which is played in India ${myobj[key]}`); // prints the key with a message
}


// Array with For in Loop
const programming = ['JavaScript', 'Python', 'Java', 'C++'];

for( const key in programming){
    console.log(key); // prints the index of each element in the arrays
    console.log(programming[key]); // prints the value of each element in the arrays
}

// for ...in loop for objects
//for of loop is for arrays, strings, maps, sets, etc.
 