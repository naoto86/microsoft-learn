"use strict";
var randomValue = 10;
randomValue = true;
randomValue = "Metro";
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase());
}
else {
    console.log("Error - A string was expected here.");
}
