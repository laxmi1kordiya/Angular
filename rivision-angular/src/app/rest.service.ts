import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Users } from './users';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpclient :HttpClient) { }
   getcomments():Observable<any>{
     return this.httpclient.get("https://jsonplaceholder.typicode.com/posts?userId=1 ")
   }

  
}
