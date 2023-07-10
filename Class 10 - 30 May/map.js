const transaction = [1000,3000,4000,2000,-898,3800,-4500];

// function convertIntoUSD (amt){
//     return amt/82;
// }
// let convert = transaction.map(convertIntoUSD);
// console.log(convert);

// let convert = transaction.map(function(amt){
//     return amt/82;
// })

// console.log(convert);

let convert = transaction.map((amt)=> amt/82)    // arrow function
console.log(convert);
