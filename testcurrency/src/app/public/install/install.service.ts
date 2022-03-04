import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InstallService {

  constructor(private http:HttpClient) { 

  }
  checkStore(url){
    return this.http.get(environment.apiUrl + 'checkuserexist/' + url);
  }
}
