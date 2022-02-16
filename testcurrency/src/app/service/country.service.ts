import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  getCountries() {
    throw new Error('Method not implemented.');
  }


  constructor(private httpclient:HttpClient) {
    // this.getCountryJSON().subscribe(data =>{

    // });
    // this.getCurrencyJSON().subscribe(data =>{

    // });
  }
  
 public getCountryJSON(){
   return this.httpclient.get('./assets/countries.json');
 }
 public getCurrencyJSON(){
   return this.httpclient.get('./assets/currencies.json');
 }




  // getcountry():Observable<any>{
  //   return this.httpclient.get('../assets/countries.json')
  //   // return this.httpclient.get( '../assets/country.json');
  // }
  // getcurrency():Observable<any>{
  //   return this.httpclient.get('../assest/currencies.json')
  // }
}
