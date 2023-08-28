// write a code to print 1,2,3,4,5 after each second



// function fxn(){
//     for(var i=1;i<6;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// fxn();   // it will print 6 6 6 6 6 after each second.

//***********************************************************************

// print 1,2,3,4,5 after each second using let

// function fxn(){
//     for(let i=1;i<6;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// fxn();   // it will print 1 2 3 4 5 after each second.

// *************************************************************************

// print 1,2,3,4,5 after each second using var

function fxn(){
    for(var i=1;i<6;i++){
        function gxn(i){
            setTimeout(function(){
                console.log(i);
          },i*1000);
        }
        gxn(i);
    }
}
fxn();   // it will print 1 2 3 4 5 after each second.