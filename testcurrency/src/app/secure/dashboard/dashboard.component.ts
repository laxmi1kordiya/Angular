import {  Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { CurrencyService } from 'src/app/service/currency.service';
import { SecureService } from '../secure.service';

declare function setData(d): any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
 
  
  public user: any;
  public sideform: FormGroup;
  public loading ={
    instantLoad: false,
    saveSettings: false,
    country: false,
    status: false

  }

  constructor(private fb : FormBuilder, private currencyservice:CurrencyService, private secureservice:SecureService) {
    this.sideform = this.fb.group({
      showDropdown: (true),
      showOnDesktop: (true),
      showOnMobile: (true),
      countryflag:(true),
      showAllCurrency:(true),
      showAllCountries: (true),
      side: new FormControl('bottomLeft'),
      backgroundColor: "#fff",
      // borderColor: "#ccc",
      hoverBackColor: "#ffffff",
      hoverFontColor: "#000000",
      textColor: "#000",
      textSize: 14,
      textSizeInPx: "14px",
      mapHeight: 21,
      mapWidth: 35,
      floatingBottom: "20px",
      floatingLeft: "20px",
      floatingRight: "20px",
      floatingTop: "20px",
      mapHeightInPx: "21px",
      mapWidthInPx: "35px",
      flagCorners: new FormControl('normal'),
      type: new FormControl('floating'),

    });
  

  }
     ngOnInit(): void {
       this.secureservice.user.subscribe(userdata =>{
        //  console.log(userdata)
         this.user = userdata;
         this.sideform.patchValue(userdata);
         })
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

    saveitem(){
      // this.loading.saveSettings = true;
      let data ={
        userId:this.user._id,
        dropdownConfig:this.sideform.value,
      };
      console.log(data);


      // window.analytics.track("droodown setting - saved",this.sideform.value);
      // this.currencyservice.setDropdownConfig(data).subscribe(res =>{

      //   this.loading.saveSettings =false;
        
      // })
    }

    changeColor(event, control){
    this.sideform.controls[control].setValue(event);


    }
   
  convertToPx(from, to) {
    this.sideform.controls[to].setValue(this.sideform.controls[from].value + 'px');
  }
  

  

  
} 

