import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-custom-service',
  templateUrl: './custom-service.component.html',
  styleUrls: ['./custom-service.component.css']
})
export class CustomServiceComponent implements OnInit {
  mycourse=[];

  constructor(private service:CourseService) { 
    // let obj=new CourseService();
    // this.mycourse=obj.getCourse()

  }

  ngOnInit() {
    this.mycourse=this.service.getCourse()
  }

}
