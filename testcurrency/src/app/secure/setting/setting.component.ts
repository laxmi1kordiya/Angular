// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-setting',
//   templateUrl: './setting.component.html',
//   styleUrls: ['./setting.component.scss']
// })
// export class SettingComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }


//   import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { CountryService } from 'src/app/secure/country/country.service';
// import { SecureService } from 'src/app/secure/secure.service';
// @Component({
//   selector: 'app-review-dialog',
//   templateUrl: './review-dialog.component.html',
//   styleUrls: ['./review-dialog.component.scss']
// })
// export class ReviewDialogComponent implements OnInit {
//   public countryJson: any = [];
//   public countrySelect: any = [];
//   public currencySelect: any = [];
//   public countries: any = [];
//   public defaultCountry: any = {};
//   public exchangeErr: boolean = false;
//   public manualExchangeFlag: boolean = false;
//   public wsscc_rates: any = {};
//   public user: any = {};
//   public countryForm: FormGroup;

//   constructor(private fb: FormBuilder, private countryService: CountryService, private secureService: SecureService) {
//     this.secureService.user.subscribe(userData => {
      
//     })

//     this.countryForm = this.fb.group({
//       countryCode: ['', Validators.required],
//       currency: ['', Validators.required],
//       autoCurrencyConvert: new FormControl(),
//       configuration: this.fb.group({
//         manualExchange: new FormControl("auto"),
//         manualExchangeRate: '1',
//         priceRounding: new FormControl(false),
//         priceRoundingObj: this.fb.group({
//           roundingType: new FormControl("shopify"),
//           roundingRule: '1',
//         }),
//         shopifyCurrency: false
//       }),
//     })

//   }
//   ngOnInit(): void {
//     //this.getCountries();
//     this.getCurrencyList();
//     this.wsscc_rates = this.secureService.getLiveRates();
//     console.log(this.wsscc_rates);

//     }
//   getCurrencyList() {
//     this.countryService.getCountryJSON().subscribe(data => {
//       this.countryJson = data;
//       this.generateSelect();
//     });
//   }
//   getCountries() {
//     this.countryService.getCountries().subscribe((res) => {
//       alert("dn")
//       this.defaultCountry = res['data'].find(e => e.default == true)
//       this.countries = res['data']
//       console.log(this.countries)
//     });
//   }
//   generateSelect() {
//     this.countrySelect = [];
//     this.currencySelect = [];
//     Object.keys(this.countryJson).forEach(key => {
//       this.countrySelect.push({
//         country: this.countryJson[key]["country"],
//         countryCode: this.countryJson[key]["countryCode"],
//         currency: this.countryJson[key]["currency"]
//       });
//       if (this.currencySelect.find((item) => item.currency === this.countryJson[key]["currency"]) === undefined) {
//         if (this.countryJson[key]["currency"] != 'ACS') {
//           this.currencySelect.push({
//             currency: this.countryJson[key]["currency"],
//             currencySymbol: this.countryJson[key]["symbol"]
//           });
//         }
//       }
//     });
//     this.countrySelect.sort((one, two) => (one.country < two.country ? -1 : 1));
//     this.currencySelect.sort((one, two) => (one.currency < two.currency ? -1 : 1));
//   }
//   selectCurrency(event: any) {
//     Object.keys(this.countryJson).forEach(key => {
//       if (key == event.target.value) {
//         this.countryForm.controls["currency"].setValue(this.countryJson[key]["currency"]);
//       }
//     });
//   }
//   currencyChanged() {
//     if (this.countryForm.controls['currency'].value == 'ACS') {
//       this.exchangeErr = true;
//     } else {
//       this.exchangeErr = false;
//     }
//   }
//   handleChange(e) {
//     if (this.countryForm.value.currency != 'ACS') {
//       if (this.countryForm.value['configuration'].manualExchange == "manual") {
//         let tmpRate = (this.wsscc_rates[this.user.currency] / this.wsscc_rates[this.countryForm.controls['currency'].value]) ? (this.wsscc_rates[this.user.currency] / this.wsscc_rates[this.countryForm.controls['currency'].value]).toFixed(4) : 1;
//         // this.countryForm.controls.manualExchangeRate.setValue(tmpRate);
//         // this.countryForm.controls.manualExchangeRate.setValue(tmpRate);
//         this.countryForm.controls['configuration']['controls']['manualExchangeRate'].setValue(tmpRate);
//         this.manualExchangeFlag = true;
//       } else {
//         this.manualExchangeFlag = false;
//       }
//     } else {
//       this.countryForm.controls['configuration']['controls']['manualExchange'].setValue("auto");
//       this.exchangeErr = true;
//     }
//   }

//   // notifyForHardReload() {
//   //   this.dataService.changeHardReload(true);
//   // }

 
//   priceRoundingChanged() {
//     if (this.countryForm.controls['configuration']['controls']['priceRounding'].value) {
//       this.countryForm.controls['configuration']['controls']['priceRoundingObj'] = this.fb.group({
//         roundingType: new FormControl("shopify"),
//         roundingRule: '1',
//       })
//     } else {
//       delete this.countryForm.controls['configuration']["controls"]["priceRoundingObj"];
//     }
//   }


//   isDisabled(coutryCode) {
//     return this.countries.find(c => c.countryCode == coutryCode)
//   }

//   getValsubmit() {
//     if (!this.countryForm.invalid) {
//       // this.loading.country = true;
//       let selectedCurrencyKey = Object.keys(this.countryJson).find(key => this.countryJson[key]["currency"] === this.countryForm.controls['currency'].value);
//       let selectedCountryKey = Object.keys(this.countryJson).find(key => key === this.countryForm.controls['countryCode'].value);

//       this.countryForm.controls['configuration']["controls"]["manualExchange"].value = this.countryForm.controls['configuration']["controls"]["manualExchange"].value == "auto" ? false : true;
//       if (!this.countryForm.controls['configuration']["controls"]["priceRounding"].value) {
//         delete this.countryForm.controls['configuration']["controls"]["priceRoundingObj"];
//       }
//       this.countryForm.controls['configuration'].updateValueAndValidity();
//       console.log(this.countryForm.controls['countryCode'].value);
//       this.countryForm.value["autoCurrencyConvert"] = this.countryForm.controls['currency'].value == 'ACS' ? true : false;
//       let data = {
//         name: this.countryJson[selectedCountryKey]["country"],
//         countryCode: this.countryForm.controls['countryCode'].value,
//         currency: this.countryForm.controls['currency'].value,
//         symbol: this.countryJson[selectedCurrencyKey]["symbol_native"],
//       ['configuration']: this.countryForm.controls['configuration'].value,
//         autoCurrencyConvert: this.countryForm.value.autoCurrencyConvert
//       }
//       this.countryService.saveCountries(data).subscribe((res) => {
//         //this.loading.country = false;
//         if (res.data) {
//          // window.analytics.track("country - added ", data);
//          // this.closePopup();
//           this.getCountries();
//           this.secureService.setUser(res.data.user);
//           //this.notifyForHardReload();
//         }
//       }, err => {
//         //this.loading.country = false;
//         console.log(err);
//       });

//     } else {
//       Object.keys(this.countryForm.controls).forEach(key => {
//         this.countryForm.get(key).markAsDirty();
//       });
//     }
//   }

//   // UpdateCountry() {

//   //   if (!this.countryForm.invalid) {
//   //    // this.loading.country = true;
//   //     this.countryForm.controls['configuration']["controls"]["manualExchange"].value = this.countryForm.controls['configuration']["controls"]["manualExchange"].value == "auto" ? false : true;
//   //     if (!this.countryForm.controls['configuration']["controls"]["priceRounding"].value) {
//   //       delete this.countryForm.controls['configuration']["controls"]["priceRoundingObj"];
//   //     }
//   //     this.countryForm.controls['configuration'].updateValueAndValidity();

//   //     let selectedKey = Object.keys(this.countryJson).find(key => this.countryJson[key]["currency"] === this.countryForm.controls.currency.value);
//   //     this.countryForm.value["currency"] = this.countryForm.controls.currency.value;
//   //     this.countryForm.value["autoCurrencyConvert"] = this.countryForm.controls.currency.value == 'ACS' ? true : false;
//   //     if (selectedKey) {
//   //       this.countryForm.value["symbol"] = this.countryJson[selectedKey]["symbol_native"]
//   //     }
//   //     this.countryForm.value["_id"] = this.countryId;
//   //     if (this.haveSameData(this.oldCountryUpdate, this.countryForm.value)) {
//   //       this.loading.country = false;
//   //       this.closePopup();
//   //     } else {
//   //       this.countryService.updateCountries(this.countryForm.value).subscribe((res) => {
//   //         window.analytics.track("country - updated ", this.countryForm.value);
//   //         this.loading.country = false;
//   //         if (res.data) {
//   //           this.closePopup();
//   //           this.getCountries();
//   //           this.secureService.setUser(res.data.user);
//   //         }
//   //       }, err => {
//   //         this.loading.country = false;
//   //         console.log(err);
//   //       });
//   //     }
//   //   } else {
//   //     this.loading.country = true;
//   //     Object.keys(this.countryForm.controls).forEach(key => {
//   //       this.countryForm.get(key).markAsDirty();
//   //     });
//   //   }
//   // }

//   compareObject(x, y) {
//     if (x === y) return true;
//     // if both x and y are null or undefined and exactly the same

//     if (!(x instanceof Object) || !(y instanceof Object)) return false;
//     // if they are not strictly equal, they both need to be Objects

//     if (x.constructor !== y.constructor) return false;
//     // they must have the exact same prototype chain, the closest we can do is
//     // test there constructor.

//     for (var p in x) {
//       if (!x.hasOwnProperty(p)) continue;
//       // other properties were tested using x.constructor === y.constructor

//       if (!y.hasOwnProperty(p)) return false;
//       // allows to compare x[ p ] and y[ p ] when set to undefined

//       if (x[p] === y[p]) continue;
//       // if they have the same strict value or identity then they are equal

//       if (typeof (x[p]) !== "object") return false;
//       // Numbers, Strings, Functions, Booleans must be strictly equal

//       if (!this.compareObject(x[p], y[p])) return false;
//       // Objects and Arrays must be tested recursively
//     }

//     for (p in y) {
//       if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
//       // allows x[ p ] to be set to undefined
//     }
//     return true;
//   }

//   haveSameData(oldObj, newObj) {
//     let tmpObj = oldObj;
//     delete tmpObj.created;
//     delete tmpObj.default;
//     delete tmpObj.name;
//     delete tmpObj.shopUrl;
//     delete tmpObj.updated;
//     delete tmpObj.userId;
//     delete tmpObj.__v;
//     if (this.compareObject(tmpObj, newObj)) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // editCountry(row) {
//   //   this.oldCountryUpdate = row;
//   //   console.log(this.countryForm);
//   //   this.countryForm.patchValue(row);
//   //   if (row['configuration'].manualExchange) {
//   //     this.manualExchangeFlag = true;
//   //     this.countryForm.controls['configuration']["controls"]["manualExchange"].setValue("manual");
//   //   } else {
//   //     this.manualExchangeFlag = false;
//   //     this.countryForm.controls['configuration']["controls"]["manualExchange"].setValue("auto");
//   //   }
//   //   this.countryDisabled = true;
//   //   if (row.default) {
//   //     this.priceValueDisabled = true;
//   //   } else {
//   //     this.priceValueDisabled = false;
//   //   }
//   //   this.countryId = row._id;
//   //   this.countryCodeEdit = row.countryCode;
//   //   this.isUpdate = true;
//   //   this.currencyChanged();
//   //   this.openPopup('Pricing By Country');
//   // }

//   // deleteCountry(row) {
//   //   this.loading.country = true;
//   //   this.countryService.deleteCountries(row._id).subscribe((res) => {
//   //     this.loading.country = false;
//   //     if (res.data) {
//   //       window.analytics.track("country - deleted ", res.data);
//   //       this.getCountries();
//   //       this.secureService.setUser(res.data.user);
//   //     }
//   //   }, err => {
//   //     console.log(err);
//   //     this.loading.country = false;
//   //   });
//   // }

 
//   // checkShopifyCurrency(event) {
//   //   if (event.target.checked) {
//   //     if (this.countryForm.value.currency && this.countryForm.value.currency != "ACS") {
//   //       this.loading.country = true;
//   //       this.countryService.getShopifyCurrency().subscribe((res) => {
//   //         this.loading.country = false;
//   //         if (res.data.body.currencies.find(e => e.currency == this.countryForm.value.currency)) {
//   //           this.shopifyCurrencyErr = false;
//   //         } else {
//   //           this.shopifyCurrencyErr = true;
//   //           this.countryForm.controls['configuration']["controls"].shopifyCurrency.setValue(false);
//   //         }
//   //       });
//   //     } else {
//   //       this.shopifyCurrencyErr = true;
//   //       this.countryForm.controls['configuration']["controls"].shopifyCurrency.setValue(false);
//   //     }
//   //   }
//   // }
 
// }


// }
