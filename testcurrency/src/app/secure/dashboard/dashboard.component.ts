import {  Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  color: string = 'black'
  arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };
  selectedColor: string = 'color1';
  
  bgcolor: string = '#fff'
  arrayColors1: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };
  selectedColor1: string = 'color1';
  
  
  public sideform: FormGroup;
  constructor(private fb : FormBuilder) {
    this.sideform = this.fb.group({
      showDropdown: (true),
      showOnDesktop: (true),
      showOnMobile: (true),
      showAllCountries: (true),
      side: ('Bottom Left')
    });
  

  }
     ngOnInit(): void {
      }
  get side(){
    return this.sideform.get("side")
    
  }
  get showOnDesktop(){
    return this.sideform.get('showOnDesktop');
   }
   get showOnMobile(){
     return this.sideform.get('showOnMobile');
    }
    get showDropdown(){
     return this.sideform.get('showDropdown');
    }
    get showAllCountries(){
      return this.sideform.get('showAllCountries')
    }
  

  

  
} 

