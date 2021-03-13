import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string='Sumit raokhande';
  id:number=3;
  imgurl:string='../../assets/Desert.jpg';
  constructor() { }

  ngOnInit() {
  }

}
