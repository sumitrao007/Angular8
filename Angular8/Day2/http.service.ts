import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getAllPost(){
    return (this.http.get(this.url));
  }

  PostAllData(obj){
    return (this.http.post(this.url,obj));
  }

  Updatedata(obj){
    return (this.http.put(this.url+"/"+obj.id,obj));
  }


}
