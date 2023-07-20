// let car1 = {
//     name : "BMW",
//     price: 3500000,
//     break: function(){
//         console.log(this);
//         console.log(`Break has been installed in ${this.name}`);
//     } 
// }

// let car2 = {
//     name : "Audi",
//     price: 4500000,
// }

// let car3 = {
//     name : "Bugati",
//     price: 9500000, 
// }

// car1.break();
// car1.break.call(car2);
// car1.break.call(car3);

// *************************************************************

// call method


// let car1 = {
//     name : "BMW",
//     price: 3500000,
//     break: function(car_color,model){
//         console.log(`Break has been installed in ${this.name}`);
//         this.color = car_color;
//         this.model = model;
//         console.log(this);
//     } 
// }

// let car2 = {
//     name : "Audi",
//     price: 4500000,
// }

// let car3 = {
//     name : "Bugati",
//     price: 9500000, 
// }

// car1.break("Red","2020");
// car1.break.call(car2,"White","2021");
// car1.break.call(car3,"Yellow","2023");


// *************************************************************

// apply method

// let car1 = {
//     name : "BMW",
//     price: 3500000,
//     break: function(tyre,engine,body){
//         console.log(`Break has been installed in ${this.name}`);
//         this.tyre = tyre;
//         this.engine = engine;
//         this.body = body;
//         console.log(this);
//     } 
// }

// let qualityCheck= ["Tyre Checked","Engine Checked","Body Checked"]; 

// let car2 = {
//     name : "Audi",
//     price: 4500000,
// }

// let car3 = {
//     name : "Bugati",
//     price: 9500000, 
// }

// car1.break(qualityCheck[0],qualityCheck[1],qualityCheck[2]);
// car1.break.call(car2,qualityCheck[0],qualityCheck[1],qualityCheck[2]);
// car1.break.call(car3,qualityCheck[0],qualityCheck[1],qualityCheck[2]);

// instead of pass all array value separatly, we can use apply method to pass whole array.

// car1.break.apply(car1,qualityCheck);
// car1.break.apply(car2,qualityCheck);
// car1.break.apply(car3,qualityCheck);

// *************************************************************

// bind method   -->   it will borrow the function from that object and create another function and call that another function everytime.
 
let car1 = {
    name : "BMW",
    price: 3500000,
    break: function(press,release,align){
        console.log(`Break has been installed in ${this.name}`);
        this.breakPress = press;
        this.breakRelease = release;
        this.breakAlign = align;
        console.log(this);
    } 
}

let car2 = {
    name : "Audi",
    price: 4500000,
}

let car3 = {
    name : "Bugati",
    price: 9500000, 
}

let car2Function = car1.break.bind(car2);
car2Function("Break Press checked","Break Release checked","Break align checked ");

let car3Function = car1.break.bind(car3);
car3Function("Break Press checked","Break Release checked","Break align checked ");

