
function Employee(id, name, departments, empLevel, salary, img) {
    this.id = id;
    this.fullName = name;
    this.departments = departments;
    this.empLevel = empLevel;
    this.img = img;
    this.salary = salary(empLevel);
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
tableData4.textContent = "empLevel";
// append th to the tr

headRow.appendChild(tableData4);

let tableData5 = document.createElement("th");
tableData5.textContent = "salary";
// append th to the tr

headRow.appendChild(tableData5);


let tableData6 = document.createElement("th");
tableData6.textContent = "Image";
// append th to the tr

headRow.appendChild(tableData6);


// ==================================================Table Rows makere function================================================= \\

document.getElementById("subBtn").onclick = function () {

    let newRow = document.createElement("tr");

    // append the new row
    tablebody.appendChild(newRow);

    // -------------------------------------------------- ID
    let empId = document.createElement("td");

    empId.textContent = document.getElementById("idInput1").value;
    // append 
    newRow.appendChild(empId);


    // --------------------------------------------------Name
    let empName = document.createElement("td");
    empName.textContent = document.getElementById("idInput2").value;
    // append 
    newRow.appendChild(empName);

    // --------------------------------------------------Department
    let empDepartment = document.createElement("td");
    empDepartment.textContent = document.getElementById("idInput3").value;
    // append 
    newRow.appendChild(empDepartment);

    // ----------------------------------------------------Level
    let empLevel = document.createElement("td");
    empLevel.textContent = document.getElementById("idInput4").value;
    // append 
    newRow.appendChild(empLevel);


    // ---------------------------------------------------Salary
    let empSalary = document.createElement("td");

    if (empLevel === "Junior") {
        empSalary.textContent = Math.floor(Math.random() * 1000) + 500;
    }
    else if (empLevel === "Mid-Senior") {
        empSalary.textContent = Math.round(Math.random() * 1000 + 1500);
    }
    else (empLevel === "Senior")
    empSalary.textContent = Math.round(Math.random() * 1500 + 2000);

    // append 
    newRow.appendChild(empSalary);



    // ----------------------------------------------------Level
    let empImage = document.createElement("td");

    // --- -----------------------------------------------taking user image function

    document.getElementById('insert-btn').onclick = function () {
        const val = document.getElementById('imageName').value;
        const src = 'https://google.com/images/' + val + '.png';
        let imgTag = document.createElement('img');
        imgTag.src = src;
        empImage.textContent.appendChild(imgTag);
    }

    // append 
    newRow.appendChild(empImage);
}



const htmlFooter = document.createElement("footer");
let footerText = document.createElement("span");

document.body.appendChild(htmlFooter);

// append text inside ther footer

htmlFooter.appendChild(footerText);

// footerText.textContent = "This is the footer";


