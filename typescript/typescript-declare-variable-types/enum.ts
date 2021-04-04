enum ContructStatus{
    Permanent=1,
    temp,
    Apprentice
}

let employeeStatus:ContructStatus = ContructStatus.temp

console.log(employeeStatus)
console.log(ContructStatus[employeeStatus])