// console.log(this);   // window object


// function fxn(){
//     console.log(this);    // window object  - because of direct invocation in function
// }
// fxn();


// function fxn(){
//     function gxn(){
//         console.log(this);  // window object
//     }
//     gxn();
// }
// fxn();

// let obj = {
//     name:"Juned",
//     age:"32",
//     callfxn: function fxn(){
//         console.log(this);
//     }
// }

// obj.callfxn();     // current object itself - {name: 'Juned', age: '32', callfxn: ƒ}

// ******************************************************


// let obj = {
//     name:"Juned",
//     age:"32",
//     callfxn: function fxn(){
//         console.log(this);
//     }
// }

// let fxn1 = obj.callfxn;

// fxn1();                          // window object  - because of direct invocation in function

//***************************************************


// let obj = {
//     name:"Juned",
//     age:"32",
//     callfxn: function fxn(){
//         function gxn(){
//         console.log(this);     // window object  - because of direct invocation of gxn() function
//         }
//         gxn();
//     }
// }
//  obj.callfxn();     


let obj = {
    name:"Juned",
    age:"32",
    callfxn: function fxn(){
        console.log(this.name);   // Juned
    }
}
 obj.callfxn(); 