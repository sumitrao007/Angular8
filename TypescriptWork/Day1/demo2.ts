//function use defined
// 1 function has no arg.& no return type
// 2 function has with arg.& no return type
// 3 1 function has no arg.& with return type
// 4 1 function has  arg.& return type

function add(){
    console.log("Within the Function...");
}

// add();

function add1(a:number,b:number):number{
    return (a+b);
}

var temp=add1(5,6)
// console.log("value of Addition is "+temp);

//annonymous function

var temp1=function (a:number,b:number):number{
    return (a+b);
}

// console.log("Result is "+temp1(2,3))  

// Fat Arrow Function/ Arrow Function

 var temp2=(a:number,b:number):number=>{
    return (a+b);
 }

//  console.log("Result is "+temp2(5,5)) 

//optional parameter function

// function add3(a:number,b?:number){
    
//     console.log("Value of a is "+a); //2
//     console.log("Value of b is "+b);  //undefined
//     console.log("Addition  is "+(a+b)); //NaN
// }

// add3(2);

function add3(a?:number,b?:number){
    
    console.log("Value of a is "+a); //undefined
    console.log("Value of b is "+b);  //undefined
    console.log("Addition  is "+(a+b)); //NaN
}

// add3();

// add3(4,5);


// Default parameter Function

var temp5=(a:number,b:number=10)=>{
    console.log("Value of a is "+a); //12
    console.log("Value of b is "+b);  //10
    console.log("Addition  is "+(a+b)); //22
}

// temp5(12);
// temp5(8,8);

var temp6=(a:number=20,b:number=9,c?:number)=>{
    console.log("Value of a is "+a); //1
    console.log("Value of b is "+b);  //2
    console.log("Value of c is "+c);
    console.log("Addition  is "+(a+b)); //3
}

// temp6(1);













