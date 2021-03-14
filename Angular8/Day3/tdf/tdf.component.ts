import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {


  contactMethod:any[]=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Office Phone'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(myform){

    console.log(myform.value);

    let obj={
      username:myform.value.myusername,
      comment:myform.value.comment,
      subscribe:myform.value.issubscribed
    }

  }

}
