// console.log("Before");

// Promise.resolve().then(function p1(){
//     console.log("Promise 1");
// })

// console.log("After");   

// *** Output ***
// Before
// After
// Promise 1

// ************************************

// console.log("Before");

// setTimeout(function cbS(){
//     console.log("SetTimeOut 1");
// },0);

// Promise.resolve().then(function promise1(){
//     console.log("Promise 1");
// })

// console.log("After");

// *** Output ***
// Before
// After
// Promise 1
// SetTimeOut 1

// *******************************************************

// console.log("Before");

// setTimeout(function cbS(){
//     console.log("SetTimeOut 1");
// },0);

// Promise.resolve().then(function promise1(){
//     console.log("Promise 1");
// })

// Promise.resolve().then(function promise2(){
//     console.log("Promise 2");
// })

// Promise.resolve().then(function promise3(){
//     console.log("Promise 3");
// })

// console.log("After");

// *** Output ***
// Before
// After
// Promise 1
// Promise 2
// Promise 3
// SetTimeOut 1

// *************************************************************