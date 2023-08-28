let radiusOfCircles = [1, 3, 5, 6, 8, 9];
// calculate the diameter and circumference of each circle in given array.

//  Diameter

function diameterfxn(radiusOfCircles) {
    let diameterOfCircle=[];
    for (let i = 0; i < radiusOfCircles.length; i++) {
        let resultOfDiameter = radiusOfCircles[i]*2;
        diameterOfCircle.push(resultOfDiameter);
    }
    return diameterOfCircle;
}
let diameterOfCircle = diameterfxn(radiusOfCircles)
console.log(radiusOfCircles);
console.log(diameterOfCircle);

// circumference

function circumferencefxn(radiusOfCircles){
    let circumferenceOfCircle = [];
    for(let i=0; i<radiusOfCircles.length;i++){
        let resultOfCircumference = radiusOfCircles[i]*2*Math.PI;
        circumferenceOfCircle.push(resultOfCircumference);
    }
    return circumferenceOfCircle;
}
let circumferenceOfCircle = circumferencefxn(radiusOfCircles);
console.log(circumferenceOfCircle);