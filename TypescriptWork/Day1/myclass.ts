
export class MyClass{

   public fname:string;
   private lname:string;
   protected id:number;

    constructor(firstname:string,lastname:string,id:number){
        this.fname=firstname;
        this.lname=lastname;
        this.id=id;
    }
    // constructor(){

    // }

    display(){
        console.log(`
            First name:: ${this.fname}
            Last Name :: ${this.lname}
            Id is     :: ${this.id}
        `)
    }


}
// var obj=new MyClass();
// var obj=new MyClass("Sumit",'Raokhande',1);
// obj.display();
