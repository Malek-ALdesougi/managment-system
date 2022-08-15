
function Employee(id, name, departments, level, salary, img) {
    this.id = id;
    this.fullName = name;
    this.departments = departments;
    this.level = level;
    this.img = img;
    this.salary = salary(level);


    function salary(level) {
        switch (level) {
            case "Junior":
                return Math.round(Math.random() * 500 + 1000);
                
            case "Mid-Senior":
                return Math.round(Math.random() * 1000 + 1500);

            case "Senior":
                return Math.round(Math.random() * 1500 + 2000);
        }
    }
    this.print1 = function () {
        return `${this.fullName} ${this.salary} JD`;
    }
}

let employes = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior", "salary"),
    new Employee(1001, "Lana Ali", "Finance", "Senior", "salary"),
    new Employee(1002, "Tamara Ayoub ", "Marketing", "Senior", "salary"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "salary"),
    new Employee(1004, "Omar Zaid", "Development", "Senior", "salary"),
    new Employee(1005, "Rana Saleh", "Development", "Junior", "salary"),
    new Employee(1006, "Ghazi Samer", "Finance", "Mid-Senior", "salary"),
    new Employee(1007, "Malek", "Developer", "Senior", "salary"),
    new Employee(1008, "Mohammad", "Networking", "Senior", "salary"),

    
]


for (let i = 0; i < employes.length; i++) {
    console.log(employes[i].print1());
}



// -------------------------------------------------call the main 

let main = document.querySelector("main");

// ------------------------------------------------create the table

const tableEmployees = document.createElement("table"); 

tableEmployees.textContent = "Employees Table !!"

// append table to the main
main.appendChild(tableEmployees);


let tablebody = document.createElement("tbody");
// append tbody to the tabel
tableEmployees.appendChild(tablebody);


let headRow = document.createElement("tr");
// append table row to the tbody
tablebody.appendChild(headRow);

// ===============================================Table head 

let tableData1 = document.createElement("th");
tableData1.textContent = "Employee ID";
// append th to the tr

headRow.appendChild(tableData1);


let tableData2 = document.createElement("th");
tableData2.textContent = "Full Name";
// append td th the tr

headRow.appendChild(tableData2);

let tableData3 = document.createElement("th");
tableData3.textContent = "department";
// append th to the tr

headRow.appendChild(tableData3);

let tableData4 = document.createElement("th");
tableData4.textContent = "level";
// append th to the tr

headRow.appendChild(tableData4);

let tableData5 = document.createElement("th");
tableData5.textContent = "salary";
// append th to the tr

headRow.appendChild(tableData5);


// ==================================================Rows makere function=================================================\\


function newRow() {

    for (let x = 0; x <= employes.length; x++) {

        let newRow = document.createElement("tr");

        // append the new row
        tablebody.appendChild(newRow);


        // -------------------------------------------------- ID
        let emp1DataID = document.createElement("td");
        emp1DataID.textContent = employes[x].id;
        // append 
        newRow.appendChild(emp1DataID);


        // --------------------------------------------------Name
        let emp1DataName = document.createElement("td");
        emp1DataName.textContent = employes[x].fullName;
        // append 
        newRow.appendChild(emp1DataName);

        
        // --------------------------------------------------Department
        let emp1DataDepartment = document.createElement("td");
        emp1DataDepartment.textContent = employes[x].departments;
        // append 
        newRow.appendChild(emp1DataDepartment);


         // ----------------------------------------------------Level
        let emp1DataLevel = document.createElement("td");
        emp1DataLevel.textContent = employes[x].level;
        // append 
        newRow.appendChild(emp1DataLevel);


         // ---------------------------------------------------Salary
        let emp1DataSalary = document.createElement("td");

        emp1DataSalary.textContent = employes[x].salary;
    
        // append 
        newRow.appendChild(emp1DataSalary);

    }  

}

// Calling the function 

newRow();





const htmlFooter = document.createElement("footer");
let footerText = document.createElement("span");

document.body.appendChild(htmlFooter);

// append text inside ther footer

htmlFooter.appendChild(footerText);

// footerText.textContent = "This is the footer";






// const div = document.createElement("div");
// let p = document.createElement("p");

// p.append("this is a para1");

// div.appendChild(p);