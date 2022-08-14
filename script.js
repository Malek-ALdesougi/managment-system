function employee(employeeId, fullName, department, level, imageUrl, salary) {

    this.id = employeeId;
    this.name = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


let employee1 = new employee(1000, "Ghazi samer", "Administrator",  "senior" , getRandomInt(1000, 2000) );
let employee2 = new employee(1001, "Lana Ali", "Finance",  "senior", getRandomInt(500, 1000));
let employee3 = new employee(1002, "Tamara Ayoob", "Markiting",  "senior", getRandomInt(1500, 3000));
let employee4 = new employee(1003, "Safi Walid", "Administrator",  "mid-senior", getRandomInt(2000, 3000));
let employee5 = new employee(1004, "Omar Zaid", "Developer",  "senior", getRandomInt(1000, 2000));
let employee6 = new employee(1005, "Rana Saleh", "Administrator",  "jonior", getRandomInt(1000, 2000));
let employee7 = new employee(1006, "Hadi ahmad", "Finance",  "mid-senior", getRandomInt(1000, 2300));
