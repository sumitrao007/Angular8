"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var Department_1 = require("./Department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(fname, lname, salary, r) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
        this.dept = new Department_1.Department(r);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n        -----Employee Details---------\n            First Name :: " + this.fname + "\n            Last Name :: " + this.lname + "\n            Salary :: " + this.salary + "\n            Role :: " + this.dept.getRole() + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
