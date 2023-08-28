function fxn(){

    let a = "abc";
    function gxn(){
        let b = "ABC";
        console.log(a,b);
    }
    return gxn;
}

let innerFxn = fxn();
// after the execution of above line, we have whole gxn function into innerFxn variable.
// innerFxn = function gxn(){
//    let b= "ABC";
//    console.log(a,b);
// }
// now innerFxn is a gxn function. so to call this function we execute innerFxn()

innerFxn();

// it is a form of a closure. bundle a function (here it is gxn) with its lexical scope (here it is fxn). 
// so that we can access the variable from parent function. so here we can access let a="abc";

