import { NgModule } from '@angular/core';
import { SecureComponent } from './secure.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownCofigComponent } from './dropdown-cofig/dropdown-cofig.component';
import { GeneralComponent } from './general/general.component';
import { OtherComponent } from './other/other.component';
import { RouterModule, Routes }from '@angular/router'
import { PopupComponent}from './popup/popup.component';
import {SettingComponent }from './setting/setting.component';
import {HelpComponent }from './help/help.component';
import { LogoutComponent } from './logout/logout.component';
import { CurrencypopupComponent } from './currencypopup/currencypopup.component';
export const SECURE_ROUTES :Routes=[
    {
        path:'dashboard',component:DashboardComponent
    },
    {
        path:'country',component:CountryComponent
    },
    {
        path:'currency',component:CurrencyComponent 
    },
    {
        path:'dropdownCofig',component: DropdownCofigComponent 
    },
    {
        path:'general',component:GeneralComponent 
    },
    {
        path:'other',component:OtherComponent 
    },
    {
        path:'popup',component:PopupComponent
    },
    {
        path:'cart-notification',component:CartNotificationComponent
    },
    {
        path:'help',component:HelpComponent
    },
    {
        path:'setting',component:SettingComponent 
    },
    {
        path:'currencypopup',component:CurrencypopupComponent 
    },
    {
        path:'logout',component: LogoutComponent 
    },
   
    
];
@NgModule({
    imports: [RouterModule.forRoot(SECURE_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
