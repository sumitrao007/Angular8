import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  name:string='Sumit Raokhande';
  mytype:string="text";
  ishidden:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
