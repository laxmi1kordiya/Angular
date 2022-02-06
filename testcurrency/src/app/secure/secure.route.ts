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
    }
    
];
@NgModule({
    imports: [RouterModule.forRoot(SECURE_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
