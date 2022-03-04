import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient, private commonService:CommonService ) { }

  createAuthorizationHeader(headers: HttpHeaders){
    if(localStorage.getItem('token')){
      headers.append('Authorization',localStorage.getItem('token').replace(/\"/g,""));
    }else{
      this.commonService.logout();
    }
  }

  setDropdownConfig(data){
    let headers =new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(environment.apiUrl + 'dropdownConfig',data, { headers: headers })
  }
 
}
