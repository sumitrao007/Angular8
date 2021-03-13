import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Vue Js','Embber JS','JSP'];

arrobj=[
  {
    name:'Samsung',
    price:10000,
    quantity:2
  },
  {
    name:'Motorolla',
    price:20000,
    quantity:1
  },
  {
    name:'One Plus',
    price:30000,
    quantity:2
  },
  {
    name:'Real me',
    price:20000,
    quantity:3
  }
]

  constructor() { }

  ngOnInit() {
  }

}
