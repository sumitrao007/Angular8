import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

  arrobj=[
    {
      name:'Sumit Raokhande',
      id:1
    },
    {
      name:'Kiran Raokhande',
      id:2
    },
    {
      name:'Spruha Raokhande',
      id:3
    }
  ];
    constructor() { }

  ngOnInit() {
  }

}
