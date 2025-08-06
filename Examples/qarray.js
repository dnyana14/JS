//Create array to store companies -> "Bloomberge", "Micorosft", "Uber", "Google", "IBM", "Netflix"
//remove the first company from the array
//remove Uber and ola in its place
//add amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//companies.splice(0, 1); // Remove the first company
    //companies.shift() // remove first element

companies.splice(2,1, "Ola"); // Replace Uber with Ola
console.log(companies);
companies.push("Amazon"); // Add Amazon at the end
console.log(companies);




//pop() delete from end and  Shift() delete from start
//push () add at end and unshift() add at start