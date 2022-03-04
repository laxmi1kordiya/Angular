import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-notification',
  templateUrl: './cart-notification.component.html',
  styleUrls: ['./cart-notification.component.scss']
})
export class CartNotificationComponent implements OnInit {
  cartForm:FormGroup
  public user:any ={};
  public color:boolean = true;
  public colorData = "";

  constructor(private fb:FormBuilder) { 
    this.cartForm = this.fb.group({
      showCartNotification: new FormControl(false),
      cartNotificationText: " We process all orders in ${storeCurrency} and you will be checkout using the most current exchange rates.",
      cartNotificationSelector: ''
    });
  }

  ngOnInit(): void {
   
  }
  setCartNotificationSettings(){
    
  }
  }


