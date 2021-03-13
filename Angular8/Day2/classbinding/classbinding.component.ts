import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  myclass:string='success';
  rating:number=2;
  isvisible:boolean=true;
  isspecial:boolean=true;
  myjson={
    "success":this.isvisible,
    'danger':!this.isvisible,
    "special":this.isspecial
  }

  constructor() { }

  ngOnInit() {
  }

}
