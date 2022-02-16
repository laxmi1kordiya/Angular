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
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule} from "@angular/material/checkbox";
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PopupComponent } from './secure/popup/popup.component';
import{ NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import { CountryService } from './service/country.service';
import { HttpClientModule } from '@angular/common/http';
// import { SettingComponent } from './secure/setting/setting.component';
import { HelpComponent } from './secure/help/help.component';
import { LogoutComponent } from './secure/logout/logout.component';
import { CurrencypopupComponent } from './secure/currencypopup/currencypopup.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'



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
    OtherComponent,
    PopupComponent,
    // SettingComponent,
    HelpComponent,
    LogoutComponent,
    CurrencypopupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    ColorPickerModule,
    MatSliderModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDialogModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  
   
    
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent,CurrencypopupComponent],

  

})
export class AppModule { }
