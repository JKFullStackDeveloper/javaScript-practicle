// console.log(this);     // empty {}

// function fxn(){
//     console.log(this);     // global object
// }
// fxn();

// function fxn(){
//     function gxn(){
//         console.log(this)      // global object
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

// let obj ={
//     name:"Juned",
//     age:"32",
//     fxnObj : function fxn(){
//         console.log(this);    
//     }
// }
// let callfxn = obj.fxnObj;

// callfxn();                  // global object


// let obj ={
//     name:"Juned",
//     age:"32",
//     sayHello : function fxn(){
//         function gxn(){
//             console.log(this);
//         }
//         gxn();
//     }
// }

// obj.sayHello();     // global object


let obj ={
    name:"Juned",
    age:"32",
    sayHello : function fxn(){
        console.log("Value of this Outside fxn " , this);    // object itself
        function gxn(){
            console.log("Value of this Inside gxn " , this);    // global object
        }
        gxn();
    }
}

obj.sayHello();     