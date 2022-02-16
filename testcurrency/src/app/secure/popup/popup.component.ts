import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators } from '@angular/forms';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public countryJson: any = [];
  public countrySelect: any = [];
  public currencySelect: any = [];
  public countries: any = [];
  public defaultCountry:any ={};
  public exchangeErr:boolean =false;
  countryForm: FormGroup;
  // wsscc_rates: any;
  // user: any;
  // manualExchangeFlag: boolean | undefined;
  


  constructor( private fb: FormBuilder , private countryService: CountryService) {
    this.countryForm = this.fb.group({
            countryCode: ['',Validators.required],
            currency: ['', Validators.required],
            autoCurrencyConvert: new FormControl(),
            configuration: this.fb.group({
              manualExchange: new FormControl("auto"),
              manualExchangeRate: '1',
              priceRounding: new FormControl(false),
              priceRoundingObj: this.fb.group({
                roundingType: new FormControl("shopify"),
                roundingRule: '1',
              }),
              shopifyCurrency: false
            }),
          });
  }


  ngOnInit(): void {
   this.getCurrencyList(); 
  //  this.getCountries();

  }
  
 
  getCurrencyList() {
        this.countryService.getCountryJSON().subscribe(data => {
          this.countryJson = data;
          this.generateSelect();
        });
      }

      // getCountries() {
      //       this.countryService.getCountries().subscribe((res: { [x: string]: any; }) => {
      //         alert("dn")
      //         this.defaultCountry = res['data'].find((e: { default: boolean; }) => e.default == true)
      //         this.countries = res['data']
      //         console.log(this.countries)
      //       });
      //     }

      generateSelect() {
            this.countrySelect = [];
            this.currencySelect = [];
            Object.keys(this.countryJson).forEach(key => {
              this.countrySelect.push({
                country: this.countryJson[key]["country"],
                countryCode: this.countryJson[key]["countryCode"],
                currency: this.countryJson[key]["currency"]
              });
              if (this.currencySelect.find((item: { currency: any; }) => item.currency === this.countryJson[key]["currency"]) === undefined) {
                if (this.countryJson[key]["currency"] != 'ACS') {
                  this.currencySelect.push({
                    currency: this.countryJson[key]["currency"],
                    currencySymbol: this.countryJson[key]["symbol"]
                  });
                }
              }
            });
            this.countrySelect.sort((one: { country: number; }, two: { country: number; }) => (one.country < two.country ? -1 : 1));
            this.currencySelect.sort((one: { currency: number; }, two: { currency: number; }) => (one.currency < two.currency ? -1 : 1));
          }
          selectCurrency(event: any) {
                Object.keys(this.countryJson).forEach(key => {
                  if (key == event.target.value) {
                    this.countryForm.controls["currency"].setValue(this.countryJson[key]["currency"]);
                  }
                });
              }
              currencyChanged() {
                if (this.countryForm.controls['currency'].value == 'ACS') {
                  this.exchangeErr = true;
                } else {
                  this.exchangeErr = false;
                }
              }

    
  // handleChange(e) {
  //   if (this.countryForm.value.currency != 'ACS') {
  //     if (this.countryForm.value['configuration'].manualExchange == "manual") {
  //       let tmpRate = (this.wsscc_rates[this.user.currency] / this.wsscc_rates[this.countryForm.controls['currency'].value]) ? (this.wsscc_rates[this.user.currency] / this.wsscc_rates[this.countryForm.controls['currency'].value]).toFixed(4) : 1;
  //       // this.countryForm.controls.manualExchangeRate.setValue(tmpRate);
  //       // this.countryForm.controls.manualExchangeRate.setValue(tmpRate);
  //       this.countryForm.controls['configuration']['controls']['manualExchangeRate'].setValue(tmpRate);
  //       this.manualExchangeFlag = true;
  //     } else {
  //       this.manualExchangeFlag = false;
  //     }
  //   } else {
  //     this.countryForm.controls['configuration']['controls']['manualExchange'].setValue("auto");
  //     this.exchangeErr = true;
  //   }
  // }
}




