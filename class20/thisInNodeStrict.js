"use strict"

//  console.log(this);    // empty object {}

// function fxn(){
//     console.log(this);     // undefined
// }
// fxn();

// function fxn(){
//     function gxn(){
//     console.log(this);              // undefined
//     } 
//     gxn();   
// }
// fxn();

// let obj ={
//     name:"Juned",
//     age:"32",
//     fxnObj : function fxn(){
//         console.log(this);    // whole current object itself : { name: 'Juned', age: '32', fxnObj: [Function: fxn] }
//     }
// }
// obj.fxnObj();
// ***************************************************


// let obj ={
//     name:"Juned",
//     age:"32",
//     fxnObj : function fxn(){
//         console.log(this);       // undefined
//     }
// }
// let callfxn = obj.fxnObj;

// callfxn(); 

//***************************************************


// let obj ={
//     name:"Juned",
//     age:"32",
//     fxnObj : function fxn(){
//         console.log(this);    // whole current object itself : { name: 'Juned', age: '32', fxnObj: [Function: fxn] }
//         function gxn(){
//         console.log(this);    // undefined
//         }       
//         gxn();
//     }
// }
// obj.fxnObj();

//**************************************************

let obj ={
        name:"Juned",
        age:"32",
        fxnObj : function fxn(){
           console.log(this.age);   // 32
        }
    }
    obj.fxnObj();