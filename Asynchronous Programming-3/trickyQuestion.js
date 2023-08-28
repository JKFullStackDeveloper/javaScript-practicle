let a = 10; // it is a number

// isNaN - return Boolean  true or false

// isNaN  --> is Not a Number

// console.log(typeof(NaN));   // number

let checkNum = isNaN(a);    // will check if a is not a number
console.log(checkNum);  // false   --> because a is a number



console.log(isNaN(null));   // false  --> because type of null is object 
                                         //and object will return true. 
                                         // so if we check isNaN(true) it will return false


console.log(isNaN(undefined));  // true  --> because type of undefined is undefined
                                         // and undefined is not a number

                             
   