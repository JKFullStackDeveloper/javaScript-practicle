function car(name_of_car,color_of_car,speed_of_car){
    // console.log(this);
    this.name = name_of_car;
    this.color = color_of_car;
    this.speed = speed_of_car;
}

let obj1 = new car("Bmw","Black","250km/h");
console.log(obj1);
let obj2 = new car("Ferrari","Red","350km/h");
console.log(obj2);
let obj3 = new car("Lamborgini","Yellow","400km/h");
console.log(obj3);

