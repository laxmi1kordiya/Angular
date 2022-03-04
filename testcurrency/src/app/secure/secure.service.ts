import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, map } from "rxjs";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
@Injectable({
  providedIn: 'root'
})
export class SecureService {
  public collectionData = [];
  userObserver = new BehaviorSubject<any>({})
  user = this.userObserver.asObservable()
  pricingPlanObserver = new BehaviorSubject<any>({})
  public liveRates = [];


  constructor(private http:HttpClient,private router:Router, private commonService:CommonService) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    if (localStorage.getItem('token')) {
    return headers.append('Authorization', localStorage.getItem('token').replace(/\"/g, ""));
    } else {
      this.commonService.logout();
    }
  }

  
  checkToken() {
    let headers = new HttpHeaders();
    headers= this.createAuthorizationHeader(headers);
    return this.http.get(environment.apiUrl + "user/checktoken", {headers: headers });
  }

  fetchUser() {
    let headers = new HttpHeaders();
    headers= this.createAuthorizationHeader(headers);
    return this.http.get(environment.apiUrl + "user/profile",{headers : headers});
  }
  
  setUser(data: any) {
    this.userObserver.next(data);
  }
  setPricingPlan(data: any) {
    this.pricingPlanObserver.next(data);
  }

  setLiveRates(data) {
    this.liveRates = data;
  }

  // getLiveRates() {
  //   return this.liveRates;
  // }
  
  getRates() {
    return this.http.get(environment.apiUrl + "livecurrencyrates");
  }

  sendRoute(user){
    if(user.admin){
      this.router.navigate(['/dashboard']);

    }else{
      if(!this.router.url.includes('activeplan') && ! this.router.url.includes('selector') && !this.router.url.includes('onboarding')){
        if(user.isInitialSetupDone) {
          this.router.navigate(['/dashboard']);
        }
      }
    }
  }

  
  

  // addLogs(data) {
  //   let headers = new HttpHeaders();
  //   this.createAuthorizationHeader(headers);
  //   return this.http.post(environment.apiUrl + 'log/addlog', data, { headers: headers })
  // }

  
  // getLogs() {
  //   let headers = new HttpHeaders();
  //   this.createAuthorizationHeader(headers);
  //   return this.http.get(environment.apiUrl + 'log/getlog', { headers: headers });

  // }
  // updateUser(data) {
  //   let headers = new HttpHeaders();
  //   this.createAuthorizationHeader(headers);
  //   return this.http.put(environment.apiUrl + 'updateUser', data, { headers: headers });
  // }

  
  // changeLoadStyle(data) {
  //   let headers = new HttpHeaders();
  //   this.createAuthorizationHeader(headers);
  //   return this.http
  //     .post(environment.apiUrl + "loading", data, { headers: headers });
  // }

  // getIPAddress() {
  //   return this.http.get("https://pro.ip-api.com/json?key=9ICbsngAdWQxmmq&fields=query,countryCode,currency,continentCode");
  // }



}
