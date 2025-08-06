//for loop

let no = 0;
for( let i=1; i<=5; i++) {
    no = no + i;
}

console.log(no); // Output: 15


// while loop
let count = 0;
while(count < 5) {
    count++;
}         // This will increment count until it reaches 5


//do while loop
let j = 1;
do {
    console.log("Hello");
    j++;
}
while(j < 10);

let i = 20;
do {
    console.log("Hello");
    i++;
}
while(i < 10); // This will print "Hello" once, since the condition is false after the first iteration