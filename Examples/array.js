//for a given array with a price of  5 items -> [250, 650, 300, 900, 50 ]
//All items have an offer of 10% off on them. 
//Change the  to the final price after applying the offer

let prices = [250, 650, 300, 900, 50];
let index = 0;
for (let val of prices){
    console.log(`Price before offer: ${val}`); 
    let offer = val /10;
     let finalprice = val - offer//prices[index] = prices[index] - offer;
     console.log(`Price after offer: ${finalprice}`); 
    index++;
}

// using for loop

for (let i  = 0; i <prices.length; i++){
    console.log("Price before offer : ", prices[i]); // here i is only a index , prices[i] is the value of the array in prices
    let offer = prices[i]/10;
    let finalprice = prices[i] - offer;
    console.log("Price after offer : ", finalprice);
}

