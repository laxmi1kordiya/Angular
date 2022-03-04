import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  generalForm:FormGroup
  public baseHundred: any = [100, 99, 95, 90, 75, 50, 25, 1, 0.99, 0.95, 0.90, 0.75, 0.50, 0.25];
  public baseHundredGeneral: any = [100, 99, 95, 90, 75, 50, 25];
  public previewMoneyFormat: String = "";
  public attachOptions= ["none", "Symbol", "Currency"];
  public spaceOptions: any = [0, 1];
  public shopifyMoneyFormatOption: any = ["{{ amount }}", "{{ amount_no_decimals }}", "{{ amount_with_comma_separator }}", "{{ amount_no_decimals_with_comma_separator }}", "{{ amount_with_apostrophe_separator }}"];

  constructor(private fb:FormBuilder) { 
    this.generalForm =this.fb.group({
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
    })
  }

  ngOnInit(): void {

    this.makePreview(
     
      this.generalForm.controls['moneyFormatObj']['controls'].leftAttach.value,
      this.generalForm.controls['moneyFormatObj']['controls'].leftSpace.value,
      this.generalForm.controls['moneyFormatObj']['controls'].moneyFormatOption.value,
      this.generalForm.controls['moneyFormatObj']['controls'].rightSpace.value,
      this.generalForm.controls['moneyFormatObj']['controls'].rightAttach.value);
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

}
  


