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


let employee1 = new employee(1000, "Ghazi samer", "Administrator", " ", "senior");
let employee2 = new employee(1001, "Lana Ali", "Finance", " ", "senior");
let employee3 = new employee(1002, "Tamara Ayoob", "Markiting", " ", "senior");
let employee4 = new employee(1003, "Safi Walid", "Administrator", " ", "mid-senior");
let employee5 = new employee(1004, "Omar Zaid", "Developer", " ", "senior");
let employee6 = new employee(1005, "Rana Saleh", "Administrator", " ", "jonior");
let employee7 = new employee(1006, "Hadi ahmad", "Finance", " ", "mid-senior");
