//  Scope of let and var

// console.log(a);
// var a =10;      // undefined

// *******************************************************************

// console.log(a);
// let a=10;        // ReferenceError: Cannot access 'a' before initialization

// ***********************************************************************

// let a=10;
// {
//     let a=20;
//     console.log(a);  // 20
// }

// console.log(a);    // 10

// *************************************************************************

// let a=10;
// {
//     console.log(a);   // 10
// }
// console.log(a);     // 10

// *************************************************************************

// Q1

// let a = 2;
// {
//     let a = 3;
//     {
//         let a = 4;
//         {
//             let a = 5;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

// output : 5 4 3 2

// ************************************************************************

// let a = 2;
// {
//     let a = 3;
//     {
//         let a = 4;
//         {
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

// output : 4 4 3 2

// *********************************************************************

// Q2

// let a = 10;
// console.log("line number 73 -->", a);
// function fn() {
//     // console.log("line number 75 -->", a);  
//     let a = 20;
//     a++;
//     console.log("line number 78 -->", a);
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("line number 82 -->", a);
//     }
//     console.log("line number 84 -->", a);
// }
// fn();
// console.log("line number 87 -->", a);

//  output:
// line number 73 --> 10
// line number 78 --> 21
// line number 82 --> 31
// line number 84 --> 21
// line number 87 --> 10

// ***********************************************************************

// var a =10;
// {
//     var a=20;
//     console.log(a);        // 20
// }
// console.log(a);            // 20

// **********************************************************************

// Q3 

// var a = 10;

// function fn() {
//     console.log("line number 112 --> ", a);   // undefined
//     var a = 20;
//     a++;
//     console.log("line number 115 --> ", a);  // 21
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("line number 119 --> ", a);  // 31
//     }
//     console.log("line number 121 --> ", a);   // 31
// }
// fn();
// console.log("line number 124 --> ", a); 10

// ********************************************************************

var a = 10;

function fn() {
    console.log("line number 112 --> ", a);   // undefined
    a++;
    console.log("line number 115 --> ", a);  // Nan
    if (a) {                    // condition false,will not execute if block
        var a = 30;
        a++;
        console.log("line number 119 --> ", a);  
    }
    console.log("line number 121 --> ", a); // Nan
}
fn();
console.log("line number 124 --> ", a); // 10

