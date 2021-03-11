import {Employee} from './employee';
import {Department} from './Department';
export class EmployeeDetails implements Employee  {
    fname: string;
    lname: string;
    salary:number;
    dept:Department;
    
    constructor(fname:string,lname:string,salary:number,r:string){
        this.fname=fname;
        this.lname=lname;
        this.salary=salary;
        this.dept=new Department(r);
    }

    display() {

        console.log(`
        -----Employee Details---------
            First Name :: ${this.fname}
            Last Name :: ${this.lname}
            Salary :: ${this.salary}
            Role :: ${this.dept.getRole()}
        `);
        
    }

}
