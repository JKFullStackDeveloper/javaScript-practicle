// Lexical Scope

// console.log(b);
// var b=10;           // undefined

// console.log(a);
// let a=10;         // ReferenceError: Cannot access 'a' before initialization


//************************************************************ */

// let a=10;

// function fxn(){
//     console.log(a);
// }

// fxn();       // 10

// **************************************************************
        // using let
// console.log(a);

// function fxn(){
//     let a = 10;
// }

// fxn();    // ReferenceError: a is not defined


    // using var 
// console.log(a);

// function fxn(){
//     var a = 10;
// }

// fxn();    // ReferenceError: a is not defined


// In GEC, memory is only allocated for function defination. 
// a is not allocated in memory because it is in function and console.log(a) is execute first before function called.
// so not able to find a. So will get error : a is not define either it is declared by let or var.

//*************************************************************************


// let a=10;

// function fxn(){
//     function gxn(){
//         console.log(a);
//     }
//     gxn();
// }
// fxn();            // 10

// Inner function can access the property of its outer function. It is called lexical scope.

// ************************************************************************************


// function fxn(){
//     console.log(a);
//     function gxn(){
//         let a=10;
//     }
//     gxn();
// }
// fxn();       // a is not defined

// Outer function can not access the property of its inner function.



// ***************************************************************************

// function fxn(){
//     let a=10;
//     return function gxn(){
//         let b=20;
//         console.log(a+b);
//     }
// }

// 1 way to call
// const x = fxn()();  // 30

// 2nd way to call
// const x = fxn();
// x();                       // 30 


// ******************************************************************


// function fxn(){
//     gxn();
//     console.log(a);
//     function gxn(){
//         let a=10;       // or var a=10 both will give error
//     } 
// }
// fxn();      // ReferenceError: a is not defined


