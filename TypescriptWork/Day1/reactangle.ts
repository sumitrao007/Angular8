import {Shape} from './shape';

export class Reactangle extends Shape{

length:number;
breadth:number;
area:number;

constructor(l:number,b:number){
    super();
    this.length=l;
    this.breadth=b;
    this.area=0;
}

Myarea(){
    this.area=this.length*this.breadth;
}

display(){
    console.log(`
    ---------Reactangle Araea-------
        Length :: ${this.length}
        breadth:: ${this.breadth}
        Area:: ${this.area}
    `);
}


}

