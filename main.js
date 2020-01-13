"use strict";
// Задача
// создать 3 объкта (objA, objB, objC) Придумать как минимум 1 свойство и 1 метод каждому объекту.
//     Прототипом objC дожен быть objB, а прототипом objB должен быть objA.
//     Реализовать цепочку протитопов с помощью Object.create.
//     Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf)
// Реализовать цепочку протитопов с помощью функций конструкторов.


// цепочку протитопов с помощью Object.create

let game = {
    isGame : true,
    setGameName(name){
        this.name = name;
    },
    getGameName(){
        return this.name;
    }
}

let someGame = Object.create(game);
someGame.setGameName('Cyberpunk');
console.log(someGame)

let typeOfGame = Object.create(someGame);
typeOfGame.setGameName('shuter');
typeOfGame.price = 2000;

console.log(typeOfGame);

// Цепочка протитопов (__proto__, setPrototypeOf)

let gadget = {
    type : true,
    brand : 'Xiaomi',
};
let laptop = {
    model : 'MiAir',
    __proto__ : gadget,
};
let tablet = {
    equipment: 'tablet',
    __proto__ : laptop,
};

console.log(tablet.brand);

console.log(gadget);
console.log(laptop);
console.log(tablet);

let phone = Object.setPrototypeOf({}, tablet);
phone.name = 'Mi5';

console.log(phone.brand);
console.log(phone.equipment);

// цепочка протитопов с помощью функций конструкторов.

function Cars(name, equipment) {
    this.name = name;
    this.equipment = equipment;
}

Cars.prototype.info = function () {
    return `Cars name : ${name}, equipment: ${equipment}`;
}

function SportCar (name, equipment, model){
    Cars.apply(this, arguments);
    this.model = model;
}

SportCar.prototype = Object.create(Cars.prototype);
SportCar.prototype.constructor = SportCar;

function HuperCar(name, model, power) {
    SportCar.apply(this, arguments);
    this.power = power;
}

HuperCar.prototype = Object.create(SportCar.prototype);
HuperCar.prototype.constructor = HuperCar;

const car = new Cars('Mazda', 'Comfort');
const sportCar = new SportCar('Honda', 'Sport', 'S2000');
const huperCar = new HuperCar('McLaren', '12C', 1200);

console.log(car);
console.log(sportCar);
console.log(huperCar);