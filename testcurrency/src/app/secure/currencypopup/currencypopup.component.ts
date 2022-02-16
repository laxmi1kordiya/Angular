import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryService } from 'src/app/service/country.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-currencypopup',
  templateUrl: './currencypopup.component.html',
  styleUrls: ['./currencypopup.component.scss']
})
export class CurrencypopupComponent implements OnInit {
  public currencyJson: any = [];
  public currencySelect: any = [];
  public countrySelect: any =[];
  public exchangeErr: boolean = true; 
  public symbol_nativeSelect :any=[];
  public itemlist:any=[];
  public dropdownSettings: IDropdownSettings ={};
  countryForm:FormGroup;

  dropdownList:any = [];
  selectedItems:any = [];
  
 




  constructor(private fb:FormBuilder , private countryService: CountryService) {
   this.countryForm =this.fb.group({
    country:[''],
    currency:[''],
    symbol_native:['']
   })
    
   }

  ngOnInit(): void {
    this.currencySelect =[];
  
    this.selectedItems = [
      {currency :'EUR'},
      {currency :'AED'},

    ];
    
    console.log(this.selectedItems)
    this.dropdownSettings={
      singleSelection: false,
      idField: 'country',
      
      textField: 'currency',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
   this.getCurrencyList(); 
  

  
  }
getCurrencyList(){
    this.countryService.getCurrencyJSON().subscribe(data =>{
      this.currencyJson = data;
      this.generateSelect();
    })
  }
generateSelect(){
    this.currencySelect =[];
    this.countrySelect =[];
    this.symbol_nativeSelect =[];
    // this.selectedItems =[];
    let i = 1;
    Object.keys(this.currencyJson).forEach(key => {

      this.currencySelect.push({
        country: this.currencyJson[key]["country"],
        symbol_native: this.currencyJson[key]["symbol_native"],
        currency: this.currencyJson[key]["currency"],
        // item_text: this.currencyJson[key]["currency"],
        item_id:i
      });
     i++;
    });
    console.log(this.currencySelect)
  }

selectCurrency(event: any) {
   
  
    
    // Object.keys(this.currencySelect).forEach(key => {
    //   if (key == event.target.value) {

    
        // this.selectedItems['currency'].setValue(this.currencySelect);
    //     // this.selectedItems["symbol_native"].setValue(this.currencyJson[key]["symbol_native"])
    //     // this.selectedItems["currency"].setValue(this.currencyJson[key]["currency"])
    //     // this.Form.controls["currency"].setValue(this.currencyJson[key]["currency"])
    //   }
    
    // });
    console.log(this.selectedItems)
  }

  
 

  currencyChanged() {
    this.currencySelect.forEach((item:any) =>{
    this.currencySelect.push(
      {
        "country":item.country,
        "symbol_native":item.symbol_native
      })
  })
  console.log(this.selectedItems)
  }
}
