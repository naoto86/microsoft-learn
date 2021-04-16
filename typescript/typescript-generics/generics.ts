function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 3, 9]);
numberArray.push(25);
// numberArray.push('This is not a number');

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');
// stringArray.push(30);

// const identity = <T, U>(value: T, message: U): T => {
//   console.log(message);
//   return value;
// };

// let returnNumber = identity<number, string>(100, 'Hello!');
// let returnString = identity<string, string>('100', 'Hola!');
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

// returnNumber = returnNumber * 10;
// returnString = returnString * 100;
// returnBoolean = returnBoolean * 10;

type ValidTypes = string | number;

const identity2 = <T extends ValidTypes, U>(value: T, message: U) => {
  let result: ValidTypes = '';
  let typeValue: string = typeof value;

  if (typeof value === 'number') {
    result = value + value;
  } else if (typeof value === 'string') {
    result = value + value;
  }

  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`
  );

  return result;
};

let numberValue = identity2<number, string>(100, 'Hello');
let stringValue = identity2<string, string>('100', 'Hello');

console.log(numberValue);

const getPets = <T, K extends keyof T>(pet: T, key: K) => {
  return pet[key];
};

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: 'cats', 2: 'dogs', 3: 'parrots', 4: 'fish' };

console.log(getPets(pets1, 'fish'));
console.log(getPets(pets2, '3'));

interface ProcessIdentity<T, U> {
  value: T;
  message: U;
  process(): T;
}

class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
  value: X;
  message: Y;
  constructor(value: X, msg: Y) {
    this.value = value;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value;
  }
}

let processor = new processIdentity<number, string>(100, 'Hello');
processor.process();

class Car {
  make: string = 'Generic Car';
  doors: number = 4;
}
class ElectricCar extends Car {
  make = 'Electric Car';
  doors = 4;
}
class Truck extends Car {
  make = 'Truck';
  doors = 2;
}
function accelerate<T extends Car>(car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}

let myElectricCar = new ElectricCar();
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck();
accelerate<Truck>(myTruck);
