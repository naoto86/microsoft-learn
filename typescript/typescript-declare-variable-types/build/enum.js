"use strict";
var ContructStatus;
(function (ContructStatus) {
    ContructStatus[ContructStatus["Permanent"] = 1] = "Permanent";
    ContructStatus[ContructStatus["temp"] = 2] = "temp";
    ContructStatus[ContructStatus["Apprentice"] = 3] = "Apprentice";
})(ContructStatus || (ContructStatus = {}));
var employeeStatus = ContructStatus.temp;
console.log(employeeStatus);
console.log(ContructStatus[employeeStatus]);
