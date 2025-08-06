for( let i = 0; i<=20; i++)  // <= means it will include 20 in the loop and < means it will not include 20 in the loop
{
    const ele = i;
    console.log(ele);

    if(ele == 10){
        console.log("10 is the best!!!!");
    }
}


for(let index = 0; index <= 10; index++){
    // console.log(`Outer loop ${index}`);
    for(let j = 0; j <= 5; j++){
        // console.log(`Inner loop ${j} & Outer loop ${index}`);
       console.log(index + '*' + j + ' = ' + index*j);    
    }
}

let array = ["Batsman", "Superman", "Ironman", "Hulk", "Thor"];
for(let i = 0; i < array.length; i++){        // if we use <= // it will give an error because the index will go out of bounds , the array length is already defined
    console.log(array[i]);
}   


//break and continue

for(let j = 0; j <= 5; j ++){
    if(j == 4){
        //break;    // break will stop the loop entirely
         continue;   // continue will skip the current iteration and move to the next one
    }
    console.log(j);
}
