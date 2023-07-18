"use strict"

// console.log(this);    // window object


// function fxn(){
//     console.log(this);
// }
// fxn();                    // undefined - beacuse of direct invocation in strict mode


// function fxn(){
//     function gxn(){
//     console.log(this);     // undefined - beacuse of direct invocation in strict mode
//     }
//     gxn();
// }
// fxn();

// let obj = {
//     name: "Juned",
//     age:32,
//     sayFxn: function fxn(){
//         console.log(this);
//     }
// }

// obj.sayFxn();                   // current object itself - {name: 'Juned', age: 32, sayFxn: ƒ}

// let obj = {
//     name: "Juned",
//     age:32,
//     sayFxn: function fxn(){
//         console.log(this);
//     }
// }

// let callfxn = obj.sayFxn;
// callfxn();                       //  undefined - beacuse of direct invocation in strict mode

// let obj = {
//     name: "Juned",
//     age:32,
//     sayFxn: function fxn(){
//         function gxn(){
//         console.log(this);
//         }
//         gxn();
//     }
// }

// obj.sayFxn();                     //  undefined - beacuse of direct invocation in strict mode


// let obj = {
//     name: "Juned",
//     age:32,
//     sayFxn: function fxn(){
//         function gxn(){
//         console.log("inside gxn" , this);  //  undefined - beacuse of direct invocation in strict mode
//         }
//         gxn();
//         console.log("inside fxn" , this);  // current object itself - {name: 'Juned', age: 32, sayFxn: ƒ}
//     }
// }

// obj.sayFxn(); 


// let obj = {
//     name: "Juned",
//     age:32,
//     sayFxn: function fxn(){
//         function gxn(){
//         console.log("inside gxn" , this);  //  undefined - beacuse of direct invocation in strict mode
//         }
//         console.log("inside fxn" , this);  // current object itself - {name: 'Juned', age: 32, sayFxn: ƒ}
//         console.log(this.name)             // Juned
//         gxn();
//     }
// }

// obj.sayFxn(); 


let obj = {
    name: "Juned",
    age:32,
    sayFxn: function fxn(){
        function gxn(){
        console.log("inside gxn" , this);  
        }
        console.log("inside fxn" , this);  
        console.log(this.name)             
        this.gxn();
    }
}

obj.sayFxn(); 