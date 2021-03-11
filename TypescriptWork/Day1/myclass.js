"use strict";
exports.__esModule = true;
exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass(firstname, lastname, id) {
        this.fname = firstname;
        this.lname = lastname;
        this.id = id;
    }
    // constructor(){
    // }
    MyClass.prototype.display = function () {
        console.log("\n            First name:: " + this.fname + "\n            Last Name :: " + this.lname + "\n            Id is     :: " + this.id + "\n        ");
    };
    return MyClass;
}());
exports.MyClass = MyClass;
// var obj=new MyClass();
// var obj=new MyClass("Sumit",'Raokhande',1);
// obj.display();
