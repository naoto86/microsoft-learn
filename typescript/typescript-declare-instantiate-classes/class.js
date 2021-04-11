"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // Constructor
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        // this._doors = doors;
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
        Car.numberOfCars++;
    }
    Car.getNumberOfCars = function () {
        return Car.numberOfCars;
    };
    Object.defineProperty(Car.prototype, "make", {
        // Accessors
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return "The color of the car is " + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if (doors % 2 === 0) {
                this._doors = doors;
            }
            else {
                throw new Error('Doors must be an even number');
            }
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Car.prototype.accelerate = function (speed) {
        return this.worker() + " is accelerating to " + speed + " MPH.";
    };
    Car.prototype.brake = function () {
        return this.worker() + " is braking with the standard braking system.";
    };
    Car.prototype.turn = function (direction) {
        return this.worker() + " is turning " + direction;
    };
    Car.prototype.worker = function () {
        return this._make;
    };
    // Properties
    Car.numberOfCars = 0;
    return Car;
}());
var myCar1 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
var myCar2 = new Car('Galaxy Motors', 'blue', 3);
// Returns 2
console.log(Car.getNumberOfCars());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    // Constructor
    function ElectricCar(make, color, range, doars) {
        if (doars === void 0) { doars = 2; }
        var _this = _super.call(this, make, color, doars) || this;
        _this._range = range;
        return _this;
    }
    Object.defineProperty(ElectricCar.prototype, "range", {
        // Accessors
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
        },
        enumerable: false,
        configurable: true
    });
    ElectricCar.prototype.brake = function () {
        return this.worker() + " is braking with the regenerative braking system.";
    };
    // Methods
    ElectricCar.prototype.charge = function () {
        console.log(this.worker() + ' is charging.');
    };
    return ElectricCar;
}(Car));
var spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
var eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);
spark.charge();
