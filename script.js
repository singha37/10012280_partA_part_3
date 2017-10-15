// Employee Class
class Employee {
    constructor(obj) {
        if (obj != null) {
            this.FirstName = obj[0];
            this.LastName = obj[1];
            this.Salary = obj[2];
        }
    }
    // Set method for 
    FirstName(FirstName) {
        this.FirstName = FirstName;
    }
    // Set method for 
    LastName(LastName) {
        this.LastName = LastName;
    }
    // Set method for 
    Salary(Salary) {
        this.Salary = Salary;
    }
    displayEmployee() {


        // Showing Result on Page
        document.getElementById("FirstName_res").innerHTML = this.FirstName;
        document.getElementById("LastName_res").innerHTML = this.LastName;
        document.getElementById("Salary_res").innerHTML = this.Salary;
    }
}


function add_user() {
    var employee = new Employee();
    employee.FirstName(document.getElementById("FirstName").value);
    employee.LastName(document.getElementById("LastName").value);
    employee.Salary(document.getElementById("Salary").value);
    employee.displayEmployee();

    // Showing the result div
    document.getElementById("res").style.display = "block";
}