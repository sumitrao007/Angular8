import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=21;
  rating1:number=22;
  mycolor2:string='blue';

  myobj={
    color:'blue',
    fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
    "font-style":'italic'

  }

  constructor() { }

  ngOnInit() {
  }

}
