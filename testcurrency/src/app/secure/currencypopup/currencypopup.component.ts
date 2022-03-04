import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CountryService } from 'src/app/service/country.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-currencypopup',
  templateUrl: './currencypopup.component.html',
  styleUrls: ['./currencypopup.component.scss']
})
export class CurrencypopupComponent implements OnInit {
  public currencyJson: any = [];
  public currencySelectSettings: IDropdownSettings ={};
  public selectedCurrencies:any =[];
  public dropdownList:any = [];
  public selectedItems:any = [];
  public shopifyCurrencyErr: boolean = false;
  public shopifyCurrencies: any;
  public shopifyCurrencyErrCrn: any = [];
  public baseHundred: any = [100, 99, 95, 90, 75, 50, 25, 1, 0.99, 0.95, 0.90, 0.75, 0.50, 0.25];
  public previewMoneyFormat: String = "";
  public attachOptions= ["none", "Symbol", "Currency"];
  public spaceOptions: any = [0, 1];
  public shopifyMoneyFormatOption: any = ["{{ amount }}", "{{ amount_no_decimals }}", "{{ amount_with_comma_separator }}", "{{ amount_no_decimals_with_comma_separator }}", "{{ amount_with_apostrophe_separator }}"];
  public addCurrency:FormGroup
  
  constructor(private fb:FormBuilder , private countryService: CountryService) {
   this.addCurrency =this.fb.group({
    country:[''],
    currency:[''],
    symbol_native:[''],
    priceRounding:new FormControl(false),
    priceRoundingObj: this.fb.group({
    roundingType: new FormControl("shopify"),
    roundingRule: "1",
    }),
    moneyFormat: new FormControl(false),
    ['moneyFormatObj']: this.fb.group({
      moneyFormat: new FormControl("smart"),
      leftAttach: "Symbol",
      leftSpace: "1",
      moneyFormatOption:"{{ amount }}",
      rightAttach:"Currency",
      rightSpace: "1",
    }),
    manualExchange: new FormControl("auto"),
    manualExchangeRate: 1,
    currencies: this.fb.array([]),
    shopifyCurrency: new FormControl(false)
  })
}
    ngOnInit(): void {
    this.dropdownList =[];
   
    this.currencySelectSettings ={
      singleSelection: false,
      idField: "item_id",
      textField: 'currency',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   
    
   this.getCurrencyList(); 
   
   this.makePreview(
     
    this.addCurrency.controls['moneyFormatObj']['controls'].leftAttach.value,
    this.addCurrency.controls['moneyFormatObj']['controls'].leftSpace.value,
    this.addCurrency.controls['moneyFormatObj']['controls'].moneyFormatOption.value,
    this.addCurrency.controls['moneyFormatObj']['controls'].rightSpace.value,
    this.addCurrency.controls['moneyFormatObj']['controls'].rightAttach.value);

 

     
}
 
 
getCurrencyList(){
    this.countryService.getCurrencyJSON().subscribe(data =>{
      this.currencyJson = data;
      this.generateSelect();
    })
  }
  generateSelect(){
    this.dropdownList =[];
    let i = 1;
    Object.keys(this.currencyJson).forEach(key => {

      this.dropdownList.push({
        currency_name: this.currencyJson[key]["currency_name"],
        symbol_native: this.currencyJson[key]["symbol_native"],
        currency: this.currencyJson[key]["currency"],
        item_id:i
      });
     i++;
    });
    console.log(this.dropdownList)
  }

   selectCurrency(event: any) {
     
     this.selectedCurrencies=[];
     for(let i =0; i<this.selectedItems.length;i++){
       var tmpcrn =this.dropdownList.find((e: { currency: any; }) =>e.currency==this.selectedItems[i].currency)
       
       this.selectedCurrencies.push({
        currency_name: tmpcrn.currency_name,
        symbol_native: tmpcrn.symbol_native,
        currency: tmpcrn.currency,
         })
    }
   }
   OnItemDeSelect(event: any){
  }
   onSelectAll(event: any){

   }
   onDeSelectAll(event: any){

   }
   makePreview(
    leftAttach , leftSpace, moneyFormat , rightSpace , rightAttach  ) {
    let lSpace = "";
    for (let index = 0; index < leftSpace; index++) {
      lSpace += " ";
    }
    let rSpace = "";
    for (let index = 0; index < rightSpace; index++) {
      rSpace += " ";
    }

    let lAttach = leftAttach != 'none' ? leftAttach : '';
    let rAttach = rightAttach != 'none' ? rightAttach : '';
    this.previewMoneyFormat = lAttach + lSpace + moneyFormat + rSpace + rAttach;
  }

  checkShopifyCurrency() {

    if (this.addCurrency.value.currencies && this.addCurrency.value.currencies.length > 0) {
      this.shopifyCurrencyErrCrn = [];
      this.addCurrency.value.currencies.forEach((element: { code: any; }) => {
        let crn = this.shopifyCurrencies.find((e: { currency: any; }) => e.currency == element.code);
        if (!crn) this.shopifyCurrencyErrCrn.push(element.code);
      });
      if (this.shopifyCurrencyErrCrn.length > 0) {
        this.shopifyCurrencyErr = true;
        this.addCurrency.controls['shopifyCurrency'].setValue(false);
      } else {
        this.shopifyCurrencyErr = false;
      }
    } else {
      this.shopifyCurrencyErr = true;
      this.addCurrency.controls['shopifyCurrency'].setValue(false);
    }
  }
}
   

