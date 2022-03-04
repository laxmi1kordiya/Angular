import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getAccessToken(query){
    // console.log(query)
    return this.http.get(environment.apiUrl + 'shopify' + query); 
  }
}
