import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-backend-connection',
  templateUrl: './backend-connection.component.html',
  styleUrls: ['./backend-connection.component.css']
})
export class BackendConnectionComponent implements OnInit {

  posts:any[]=[];

  id:string='';
  title:string='';
  body:string='';
  ishiiden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetAllPost();
  }

  GetAllPost(){
    this.service.getAllPost()
    .subscribe((response)=>{
      console.log(response);
      this.posts=(<any>response);


    })
  }

  OnSend(mytitle,mybody){
  
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.PostAllData(obj)
    .subscribe((response)=>{
      console.log(response);
    })    

  }

  onUpdate(item){

    console.log("id  "+item.id);
    console.log("Title  "+item.title);
    console.log("Body  "+item.body);

    this.id=item.id;
    this.title=item.title;
    this.body=item.body;

    this.ishiiden=false;

  }

  onFinalUpdate(){

    let jsonobj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.Updatedata(jsonobj)
    .subscribe((response)=>{
      console.log(response);
      this.id='';
      this.title='';
      this.body='';
      this.ishiiden=true;

    })

  }



}
