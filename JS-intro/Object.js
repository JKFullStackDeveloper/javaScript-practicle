let capAmerica ={
    name: "Steve Rogers",
    age:"500",
    friends: ["Bucky","Tony","Natasha","Thor","Hulk"],
    command:function(){
        console.log("Attack");
    },
    address:{
        country: "USA",
        city:{
            state:"Brooklyn",
            pincode:1256
        }
    },
    isAvenger:false
}
// console.log(capAmerica.age);   // . notation
// console.log(capAmerica["age"]);  // bracket notation
// console.log(capAmerica.friends[1]);
// console.log(capAmerica.address.city.state);
console.log(capAmerica);
capAmerica.isAvenger=true;     //update the object
// console.log(capAmerica);

// add new key value in object

capAmerica.movies=["First Avenger", "Civil War", "End Game"];

console.log(capAmerica);

// how to call function in Object

capAmerica.command();

//delete the value of Object

delete capAmerica.age;

console.log(capAmerica);
