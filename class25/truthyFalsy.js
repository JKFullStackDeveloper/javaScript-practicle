let a=10    // true
let b=0;    // flase

a = "abc";  // true
b="";          // false

a={name:"Juned"}   // true
a={}  // true

a=[1,2,3];   // true
a=[]; // true

a=undefined; // false
b=null   // false

a=NaN;  // false
b= false; // false


// falsy value = 0,"",undefined,null,NaN,false
// apart from above all is treated as truthy  

if(a){
    console.log("a is true");
}else{
    console.log("a is false");
}

if(b){
    console.log("b is true");
}else{
    console.log("b is false");
}