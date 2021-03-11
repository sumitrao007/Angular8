//array 
var a1 = [11, 22, 33];
var a2 = [22, 33, 44, 55];
var a3 = [];
// you can insert value dynamically using 2 ways
// 1 push & pop Works as LIFO Principle
// 2 Using splice 
//
a3.push(10);
// console.log(a3);
a3.push(20, 30, 40);
// console.log(a3);
var temp = a3.pop();
// console.log(a3);
// console.log("Poped value is "+temp);
var a4 = [11, 12, 13, 14];
// console.log(a4);
// a4.splice(2,0,40);
// console.log(a4);
// a4.splice(3,0,50,60,70)
// console.log(a4);
// a4.splice(2,1);
// console.log(a4);
// a4.splice(1,3);
// console.log(a4);
// a4.splice(1,1,20);
// console.log(a4);
var a5 = [22, 33, 44];
a5.forEach(function (myvalue, i, arr) {
    console.log("\n            a5[" + i + "]= " + myvalue + "\n            " + arr + "\n    ");
});
