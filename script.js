
// function Employee(id, name, departments, empLevel, salary, img) {
//     this.id = id;
//     this.fullName = name;
//     this.departments = departments;
//     this.empLevel = empLevel;
//     this.img = img;
//     this.salary = salary(empLevel);
// }
// // -------------------------------------------------call the main 

// let main = document.querySelector("main");

// // ------------------------------------------------create the table

// const tableEmployees = document.createElement("table");

// tableEmployees.textContent = "Employees Table !!"

// // append table to the main
// main.appendChild(tableEmployees);


// let tablebody = document.createElement("tbody");
// // append tbody to the tabel
// tableEmployees.appendChild(tablebody);


// let headRow = document.createElement("tr");
// // append table row to the tbody
// tablebody.appendChild(headRow);

// // ===============================================Table head 

// let tableData1 = document.createElement("th");
// tableData1.textContent = "Employee ID";
// // append th to the tr

// headRow.appendChild(tableData1);


// let tableData2 = document.createElement("th");
// tableData2.textContent = "Full Name";
// // append td th the tr

// headRow.appendChild(tableData2);

// let tableData3 = document.createElement("th");
// tableData3.textContent = "department";
// // append th to the tr

// headRow.appendChild(tableData3);

// let tableData4 = document.createElement("th");
// tableData4.textContent = "empLevel";
// // append th to the tr

// headRow.appendChild(tableData4);

// let tableData5 = document.createElement("th");
// tableData5.textContent = "salary";
// // append th to the tr

// headRow.appendChild(tableData5);


// let tableData6 = document.createElement("th");
// tableData6.textContent = "image";
// // append th to the tr

// headRow.appendChild(tableData6);


// // ==================================================Table Rows makere function================================================= \\

// document.getElementById("subBtn").onclick = function () {

//     let newRow = document.createElement("tr");

//     // append the new row
//     tablebody.appendChild(newRow);

//     // -------------------------------------------------- ID
//     let empId = document.createElement("td");

//     empId.textContent = document.getElementById("idInput1").value;
//     // append 
//     newRow.appendChild(empId);


//     // --------------------------------------------------Name
//     let empName = document.createElement("td");
//     empName.textContent = document.getElementById("idInput2").value;
//     // append 
//     newRow.appendChild(empName);

//     // --------------------------------------------------department
//     let empDepartment = document.createElement("td");
//     empDepartment.textContent = document.getElementById("idInput3").value;
//     // append 
//     newRow.appendChild(empDepartment);

//     // ----------------------------------------------------Level
//     let empLevel = document.createElement("td");
//     empLevel.textContent = document.getElementById("idInput4").value;
//     // append 
//     newRow.appendChild(empLevel);


//     // ---------------------------------------------------salary
//     let empSalary = document.createElement("td");

//     if (empLevel === "Junior") {
//         empSalary.textContent = Math.floor(Math.random() * 1000) + 500;
//     }
//     else if (empLevel === "Mid-Senior") {
//         empSalary.textContent = Math.round(Math.random() * 1000 + 1500);
//     }
//     else (empLevel === "Senior")
//     empSalary.textContent = Math.round(Math.random() * 1500 + 2000);

//     // append 
//     newRow.appendChild(empSalary);



//     // ----------------------------------------------------Level
//     let empImage = document.createElement("td");

//     // --- -----------------------------------------------taking user image function

//     document.getElementById('insert-btn').onclick = function () {
//         const val = document.getElementById('imageName').value;
//         const src = 'https://google.com/images/' + val + '.png';
//         let imgTag = document.createElement('img');
//         imgTag.src = src;
//         empImage.textContent.appendChild(imgTag);
//     }

//     // append 
//     newRow.appendChild(empImage);
// }



// const htmlFooter = document.createElement("footer");
// let footerText = document.createElement("span");

// document.body.appendChild(htmlFooter);

// // append text inside ther footer

// htmlFooter.appendChild(footerText);

// // footerText.textContent = "This is the footer";
let form = document.getElementById("main-form");
const cardsDiv = document.getElementById("cards");

let allEmployees = [];

let Employees = function (employeeId, fullName, department, Level, image) {

    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = Level;
    this.image = image;
    this.salary = this.calcSalary(Level);
}

Employees.prototype.calcSalary = function (level) {

    switch (level) {

        case "junior":
            return Math.round(Math.random() * (500 - 1000) + 1000);
            break;

        case "mid-senior":
            return Math.round(Math.random() * (1000 - 1500) + 1500);
            break;

        case "senior":
            return Math.round(Math.random() * (1500 - 2000) + 2000);
            break;
    }
}



let emp1 = new Employees("1000", "malek saleh", "developer", "mid-senior", "hghhh")
console.log(emp1.salary);


function render(event) {
    
    event.preventDefault();

    let id = event.target.id.value;
    let fulName = event.target.fulName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let newEmp = new Employees(id, fulName, department, level, image);

    allEmployees.push(newEmp);

    sendToLocal()
    
    print(newEmp);
    console.log(newEmp);

    document.getElementById("main-form").reset();
}

form.addEventListener('submit', render);

function print(employee){

    let card = document.createElement("div");
    cardsDiv.appendChild(card);

    let cardImage = document.createElement("img")
    cardImage.setAttribute("src", employee.image );
    
    card.appendChild(cardImage);

    let para1 = document.createElement("p");
    para1.textContent =  `Name : ${employee.fulName} - ID : ${employee.id}`;
    card.appendChild(para1);

    let para2 = document.createElement("p");
    para2.textContent =  `Depatrment : ${employee.department} - Level : ${employee.level}`;
    card.appendChild(para2);

    let para3 = document.createElement("p");
    para3.textContent =  `Salary : ${employee.salary}`;
    card.appendChild(para3);

}
// this function used to convert the array to a string using JSON.Stringfy
// after that we push this array to the local storage
function sendToLocal(){

    let stringArray = JSON.stringify(allEmployees);
    localStorage.setItem("employees", stringArray);
}

// when we make a refresh to the page all data and div will be gone 
// so we need to make anothr fuction to read the data from local stoarge each time the page refresh 
// and present these cards again in the page

function getFromLocal(){
    let JSONArray = localStorage.getItem("employees");

    let objectArray = JSON.parse(JSONArray);

    objectArray.forEach((ele) => {
        print(ele);
    })

    console.log(objectArray);
}






