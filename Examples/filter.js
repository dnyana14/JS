//we are given array of marks of student, filter out the marks of student that scores 90+.

let array = [100,90,94,95, 92, 70,50]

let array1 = array.filter((score) => {
    return score > 90;
})

console.log(array1)