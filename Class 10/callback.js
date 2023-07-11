// function firstName (){
//     console.log("Juned");
// }

// function lastName(){
//     console.log("Kachaliya");
// }
// firstName();
// lastName();

// function firstName(lastName){
//     console.log("Juned");
//     lastName();
// }

// function lastName(){
//     console.log("Kachaliya");
// }

// firstName(lastName);


// *** Example of Callback and Higher Order Function *********


function hof(cb){
    console.log(" I am a Higher Order Function as i am accepting a function as an argument");
    cb();
}

function cb(){
    console.log("I am a Callback as i am being passed as an argument to another function");
}
hof(cb);
// hof(cb());




