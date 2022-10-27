
function Employee(id, name, dep, level,salary, img) {
    this.id = id;
    this.fullName = name;
    this.dep = dep;
    this.level = level;
    this.img = img;
    this.salary = salary(level);


    function salary(level) {
        switch (level) {
            case "Junior":
                return Math.round(Math.random() * 500 + 500);
                break;
            case "Mid-Senior":
                return Math.round(Math.random() * 500 + 1000);
                break;
            case "Senior":
                return Math.round(Math.random() * 500 + 150);
                break;
        }
    }
    this.print = function () {
        return `Hello ${this.fullName} your salary is ${this.salary} JD`;
    }
}

let employes = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub ", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "Development", "Junior"),
    new Employee(1006, "Ghazi Samer", "Finance", "Mid-Senior"),
]

for (let i = 0; i < employes.length; i++) {
    console.log(employes[i].print());
}








// function Employee(employeeId, fullName, department, level, salary) {

//     this.id = employeeId;
//     this.fullName = fullName;
//     this.department = department;
//     this.level = level;
//     this.salary = salary();



//     // if (level = "senior")
//     //     console.log(salary(10, 15));
//     // else if (level = "mid-senior")
//     //     console.log(salary(15, 20));
//     // else if (level= "junior")
//     //     console.log(salary(20, 30));


//     function salary(min, max) {

//         if (level = "senior"){
//         return Math.floor(Math.random() * (1500 - 2000));
//         }

//     else if (level = "mid-senior")
//         {
//             return Math.floor(Math.random() * (1000 - 1500));
//         }
//     else if (level= "junior"){
//         return Math.floor(Math.random() * (500 - 1000));
//     }

//     else {
//         return "this is not an employee !"
//     }
       
//     }

//     // console.log(salary(10,20));




//     this.print = function () {
//         return ` Hello i'm ${this.fullName} and my salary is ${this.salary}`;
//     }

// }



// // senior 1500- 2000
// // mid-senior 1000 - 1500
// // junior 500 - 1000 



// let empArray = [

//     new Employee(1000, "Ghazi samer", "Administrator", "senior"),
//     new Employee(1001, "Lana Ali", "Finance", "senior"),
//     new Employee(1002, "Tamara Ayoob", "Markiting", "senior"),
//     new Employee(1003, "Safi Walid", "Administrator", "mid-senior"),
//     new Employee(1004, "Omar Zaid", "Developer", "senior"),
//     new Employee(1005, "Rana Saleh", "Administrator", "jonior"),
//     new Employee(1006, "Hadi ahmad", "Finance", "mid-senior")
// ];


// for (let x = 0; x <= empArray.length; x++) {

//     console.log(empArray[x].print());
// }