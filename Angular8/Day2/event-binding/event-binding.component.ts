import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count:number=0;
  result:number=0;
  result1:number=0;
  name:string='';

  constructor() { }

  ngOnInit() {
  }

  onClick(){

    if(this.count==0){
      console.log("Event Occur!!!");
      this.count++;
    }
    
  }

  onClick2(){
    console.log("on Image Click.....");
  }

  onDisplay(num1:number,num2:number){
    // console.log("Number1 "+num1);
    // console.log("Number2 "+num2);
    // this.result1=(+num1)+(+num2);
    this.result1=num1+num2;

  }

  onChange(){
    console.log("Change Event Occur!!!!");
  }

}
