
// Type Coersion

let num1 = 10;
let num2 = 20;
let num3 = "30";

console.log(num1+num2);  // 30
let num=num1+num3;
console.log(typeof(num)); // string
console.log(num); // 1030

console.log(10*"jk");   //NaN  (not a number)
console.log(typeof(NaN));   // number

console.log(typeof(null)); // object

console.log(typeof(undefined))  // undefined

console.log(typeof(typeof(undefined))) // string

console.log(1+2+"Hello World")  // 3Hello World

console.log(true+2); // 3   (treat true as 1)

console.log(true+" string ");  //truestring

console.log(3 - "1");  // 2
console.log("3"-1); // 2
console.log(3 - "string"); // NaN

if(3=="3"){                        // just check the value
    console.log("Equal");
}else{
    console.log("Not Equal");
}

if(3==="3"){                  // check value and datatype both
    console.log("Equal");
}else{
    console.log("Not Equal");
}

console.log(false==""); // true    (empty string treat like false, so false==false -> true)

// Explicit conversion

let Num = 100;

let Str1 = String(Num);  // it will convert number to string
console.log(typeof(Str1));   // string

let OrgNum = Number(Str1);  // it will conver string to number
console.log(typeof(OrgNum)); //number


//************************** */

var a=10;
var b= "10";

console.log(a==b)  // true
console.log(a===b) // false
console.log(10.0===10) // true

var a= null;
var b= undefined;

console.log(a == b) // true
console.log(a === b) // false

var a = NaN
var b = NaN

console.log(a == b) // false
console.log(a === b) // false

