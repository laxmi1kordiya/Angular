import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  public planName: String;
  public planId: number;
  public startDate: String;
  public endDate: String;
  public storeData: any = {
    storeName: 'wscc-test',
    shopUrl: '',
    email: '',
    phone: '',
    currency: '',
    country_name: '',
    recurringPlanName: '',
};
public tabs = {
  list: [
    {
      tab: 'details',
      label: 'Store Details',
    },
    {
      tab: 'priceSetting',
      label: 'Price Setting'
    },
    {
      tab: 'otherSetting',
      label: 'Other Setting'
    }
  ],
  activeTab: 'details'
};
public syncProcess: any = {
  products: false
};
public appForm: FormGroup;
public activeTab: string;
public themeForm: FormGroup;
public texts = ["${{amount}}", "${{amount}} USD", "<span class='money'>${{amount}}</span>", "<span class='money'>${{amount}} USD</span>"]
public storeSettings;
public configuration: any;
public showCurrencyAndSymbol: boolean = false;
public currency: String = "";
public themeSelect: any = [];
public user: any;
public showHint: Boolean = false;
public integrated: Boolean = true;

//other theme variable for update
public otherThemeName: String = "";
public themeLink: String = "";
public storePassword: String = "";
public removeCodeError: boolean = false;

public storeCurrencySymbol: any = "";


  constructor() { }

  ngOnInit(): void {
  }
  
  changeTab(tab) {
    this.tabs.activeTab = tab;
  }
  saveSymbol(){

  }
}
