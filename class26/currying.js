// function sum(a,b,c){
//     return a+b+c;
// }

// let res = sum(5,10,15);
// console.log(res);


// currying

// function outerFxn(a){
//     function innerFxn(b){
//         return a+b;
//     }
//     return innerFxn;
// }

// let sum = outerFxn(10);
// let res = sum(5);
// console.log(res);

// let sum = outerFxn(10)(10);    // currying
// console.log(sum);

// *************************************************************

// function outerFxn(a){
//     function innerFxn(b){
//         function innerMostFxn(c){
//             return a+b+c;
//         }
//         return innerMostFxn;
//     }
//     return innerFxn;
// }

// let innersum = outerFxn(10);
// let innerMostSum = innersum(15);
// let res = innerMostSum(15);
// console.log(res);

// let res = outerFxn(10)(15)(15);
// console.log(res);

// Q-1

// Multiply(2)(3)(3) = 18, make use of function currying

// function multiply(a){
//     function innerMultiply(b){
//         function innerMostMultiply(c){
//             return a*b*c;
//         }
//         return innerMostMultiply;
//     }
//     return innerMultiply;
// }

// let finalAns = multiply(2)(3)(3);
// console.log(finalAns);


// Q-2

// calculate('sum')(3)(4) -> 7
// calculate('substract')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2

// function calculate(ops){
//     function calc1(a){
//         function calc2(b){
//             if(ops=="sum"){
//                 return a+b;
//             }else if(ops=="substract"){
//                 return a-b;
//             }else if(ops=="multiply"){
//                 return a*b;
//             }else if(ops=="divide"){
//                 return a/b;
//             }else{ return console.log("invalid function")}
//         }
//         return calc2;
//     }
//     return calc1;
// }

// let calc =calculate('sum')(3)(4);
// let calc = calculate('substract')(5)(2) 
// let calc = calculate('multiply')(3)(4)
// let calc = calculate('divide')(8)(4)
// console.log(calc);

// *******************************************************************************

// Q-3   :   infinite Currying   ***** IMP interview Question *****

// write an add function which can add value like this...

//  add(2)(3)(5)(9)(10)................()

// add(2)(3)() -> 5
// add(5)(2)(3)() -> 10
// add(5)(5)(5)(5)(5)() -> 25


function add(a){
    return function(b){
        if(b){
            return add(a+b);
        }else{
            return a;
        }
    }
}

let res = add(5)(5)(5)(5)(5)();
// console.log(res);

// ************************************************************************************

// Partial Currying or Partial Application

function sum(a){
    return function(b,c){
        return a+b+c;
    }
}

let sumWithTen = sum(10)(6,5);
console.log(sumWithTen);

let sumWithFour = sum(4)(5,15);
console.log(sumWithFour);
