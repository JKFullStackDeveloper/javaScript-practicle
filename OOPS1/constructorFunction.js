function Car(name_of_car,color_of_car,speed_of_car){
    // console.log(this);
    this.name = name_of_car;
    this.color = color_of_car;
    this.speed = speed_of_car;
    this.sayHello = function(){
        console.log(`Hello from ${this.name}`);
    }
}

let obj1 = new Car("Bmw","Black","250km/h");
console.log(obj1);
obj1.sayHello();
// let obj2 = new Car("Ferrari","Red","350km/h");
// console.log(obj2);
// let obj3 = new Car("Lamborgini","Yellow","400km/h");
// console.log(obj3);

