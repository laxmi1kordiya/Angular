import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
 
constructor(private http:HttpClient) {
   
  }
  
 public getCountryJSON(){
   return this.http.get('assets/countries.json');
 }
 public getCurrencyJSON(){
   return this.http.get('./assets/currencies.json');
 }
 postCountrydata(data: any){
  console.log(data);
  return this.http.post('http://localhost:3000/data',data);
}




  // getcountry():Observable<any>{
  //   return this.httpclient.get('../assets/countries.json')
  //   // return this.httpclient.get( '../assets/country.json');
  // }
  // getcurrency():Observable<any>{
  //   return this.httpclient.get('../assest/currencies.json')
  // }
}


