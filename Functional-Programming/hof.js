let radiusOfCircles = [1, 3, 5, 6, 8, 9];

// calculate the diameter and circumference of each circle in given array using HOF.

function calculate(arrOfRedius,redi){
    let arr=[];
    for(let i=0;i<arrOfRedius.length;i++){
        let calculationOfCircle = redi(arrOfRedius[i]);
        arr.push(calculationOfCircle);
    }
    return arr;
}

// Callback function for Calculate Diameter of circle
function calculateDiameterOfCircle(r){
    return 2*r;
}
let diameterOfCircle = calculate(radiusOfCircles,calculateDiameterOfCircle);
console.log("Diameter of Circle");
console.log(diameterOfCircle);

// Callback function for Calculate Circumference of circle
function calculateCircumferenceOfCircle(r){
    return r*2*Math.PI;
}
let circumferenceOfCircle = calculate(radiusOfCircles,calculateCircumferenceOfCircle);
console.log("Circumference of circle");
console.log(circumferenceOfCircle);

// Callback function for Calculate Area of circle

function calculateArea(r){
    return Math.PI*r*r;
}

let areaOfCircle=calculate(radiusOfCircles,calculateArea);
console.log("Area of circle");
console.log(areaOfCircle);