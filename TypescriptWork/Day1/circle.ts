import {Shape} from './shape';
export class Circle extends Shape  {
    radius:number;
    area:number;

    constructor(r:number){
        super();
        this.radius=r;
        this.area=0;
    }

    Myarea(){
        this.area=3.14*this.radius*this.radius;
    }

    display(){
        console.log(`
        -----------Circle Area is -------------
         Radius :: ${this.radius}
         Area :: ${this.area}
        `);
    }
    
}