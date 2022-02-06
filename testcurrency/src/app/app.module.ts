import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { PublicComponent } from './public/public.component';
import { InstallComponent } from './public/install/install.component';
import { SecureComponent } from './secure/secure.component';
import { CartNotificationComponent } from './secure/cart-notification/cart-notification.component';
import { CountryComponent } from './secure/country/country.component';
import { CurrencyComponent } from './secure/currency/currency.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { DropdownCofigComponent } from './secure/dropdown-cofig/dropdown-cofig.component';
import { GeneralComponent } from './secure/general/general.component';
import { OtherComponent } from './secure/other/other.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule }from '@swimlane/ngx-datatable';
import { ColorPickerModule } from 'ngx-color-picker';


@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    HeaderComponent,
    SidebarComponent,
    PublicComponent,
    InstallComponent,
    SecureComponent,
    CartNotificationComponent,
    CountryComponent,
    CurrencyComponent,
    DashboardComponent,
    DropdownCofigComponent,
    GeneralComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    ColorPickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
