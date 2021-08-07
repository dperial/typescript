//! Keywords
const address = "India";
// console.log(address)

let marks = 50.0;
// console.log(marks)

var username = "Abhishvek";
// console.log(username)

//! var vs let
// for(var i = 0;i < 10; i ++){
//     console.log(i) //! Not a blocked scope variable
// }
// console.log(i)

// for(let i = 0;i < 10; i ++){
//     console.log(i) //! Blocked scope variable
// }
// console.log(i)

//! Basic types

//1.strings
let dogname: string = "Bruno";
// console.log(dogname)

//2.numbers => All the numbers (int , double, complex, float)
let myMarks: number = 100.0;
// console.log(myMarks)

//3. boolean => False/True (Try to declare them with "is")
let isSleeping: boolean = false;
// isSleeping = true
// console.log(isSleeping)

//! Complex types
//4.Arrays => List of data
let subjects: number[];
subjects = [55, 56, 57];
// console.log(subjects)

//5.Maps
let slots = new Map();
slots.set("name", "Abhishvek");
slots.set("job", "Programmer");

// console.log(slots.get("name"))
// console.log(slots.get("job"))

//! Union type
let myCustomUnionType: string | number | boolean | boolean[];
// let userc = myCustomUnionType
myCustomUnionType = 55;
// myCustomUnionType = [false]
// console.log(myCustomUnionType)
myCustomUnionType = "55";
// console.log(myCustomUnionType)
myCustomUnionType = false;
// console.log(myCustomUnionType)

//! Any type
let car: any;
car = 55;
car = "55";
car = [55, 55, 55];
// console.log(car)

//! Custom types
type userData = string | number | boolean; //UID
let userA: userData;
let userB: userData;
userA = 55;
userA = "55";
userA = false;
userB = 56;
userB = "56";
// console.log(userA)

//! Functions

//Basic function
function doAddition(x: number, y: number): number {
  return x + y;
}
// console.log(doAddition(5, 100));

//Default parameter
function callMe(name: string, age: number = 20): void {
  console.log(`${name} has age of ${age}`);
}

// callMe("Abhishvek");

//Optional parameter
function callMeLater(name: string, age?: number): void {
  console.log(`${name} has age of ${age}`);
}

// callMeLater("Abhishvek");

//! Class
class Car {
  //Members/Variables
  model: string;
  engine: string;
  price: number;

  constructor(x: string, y: string, z: number) {
    this.model = x;
    this.engine = y;
    this.price = z;
  }

  carData() {
    return `This car has ${this.model} has ${this.engine} with a price of ${this.price}`;
  }
}

const car1 = new Car("Audi", "MAKVB78", 1000);
// console.log(car1.carData())
const car2 = new Car("Merceders", "UIviao", 1500);
// console.log(car2.carData())

//!Interfaces

interface DogData {
  //! DRY
  dogname: string;
  dogage: number;
}

let dog1: DogData = {
  dogage: 2,
  dogname: "Bruno",
};

let dog2: DogData = {
  dogname: "Lucy",
  dogage: 4,
};

interface Products {
  product_name: string;
  product_price: number;
  product_image: string;
  product_desc: string;
}
let product1: Products = {
  product_desc: "aoibaoibv",
  product_image: "abiofaoivb",
  product_name: " oaifboif",
  product_price: 161,
};

// console.log(dog2.dogage);

//! SPECIAL KEYWORDS => PICK , OMIT
interface PizzaData {
  size: string;
  grams: number;
  service: number;
}

type Pizza1 = Pick<PizzaData, "size">;

let cheesePizza: Pizza1 = {
  size: "large",
};

type Pizza2 = Omit<PizzaData, "size">;
let beaconPizza: Pizza2 = {
  grams: 55,
  service: 100,
};
//console.log(beaconPizza.grams)