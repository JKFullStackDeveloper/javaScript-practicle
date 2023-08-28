let radiusOfCircles = [1, 3, 5, 6, 8, 9];


function calculateDiameterOfCircle(r){
    return 2*r;
}

function calculateCircumferenceOfCircle(r){
    return r*2*Math.PI;
}

function calculateArea(r){
    return Math.PI*r*r;
}

let diameterOfCircle = radiusOfCircles.map(calculateDiameterOfCircle)
console.log(radiusOfCircles)
console.log(diameterOfCircle);

// let calculateArea = radiusOfCircles.map((r)=>Math.PI*r*r);
let calculateOfArea = radiusOfCircles.map(calculateArea) 
console.log(radiusOfCircles)
console.log(calculateOfArea);


// ***********************************************************

// const transaction = [1000,3000,4000,2000,-898,3800,-4500];

// function convertIntoUSD (amt){
//     return amt/82;
// }
// let convert = transaction.map(convertIntoUSD);
// console.log(convert);

// let convert = transaction.map(function(amt){
//     return amt/82;
// })

// console.log(convert);

// let convert = transaction.map((amt)=> amt/82)    // arrow function
// console.log(convert);
