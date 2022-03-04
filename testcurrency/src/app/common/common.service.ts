import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private noDataMsg = new BehaviorSubject('No data Found');
  noDataCurrentMsg = this.noDataMsg.asObservable();

  constructor(private router:Router) { }

  changeNoDataMsg(message: string) {
    this.noDataMsg.next(message);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('shopurl');
    this.router.navigate(["/install"]);
  }
}
