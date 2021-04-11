class Car implements Vehicle {
  // Properties
  private static numberOfCars: number = 0;
  private _make: string;
  private _color: string;
  private _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    // this._doors = doors;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
    Car.numberOfCars++;
  }
  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
  // Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return `The color of the car is ${this._color}`;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
  }
  protected worker(): string {
    return this._make;
  }
}

let myCar1 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 3);
// Returns 2
console.log(Car.getNumberOfCars());

class ElectricCar extends Car {
  // Properties unique to ElectricCar
  private _range: number;
  // Constructor
  constructor(make: string, color: string, range: number, doars = 2) {
    super(make, color, doars);
    this._range = range;
  }
  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }
  brake(): string {
    return `${this.worker()} is braking with the regenerative braking system.`;
  }
  // Methods
  charge() {
    console.log(this.worker() + ' is charging.');
  }
}

let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);
spark.charge();

interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: 'left' | 'right'): string;
}
