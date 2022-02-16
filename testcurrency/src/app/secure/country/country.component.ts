import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatDialog,MatDialogRef} from "@angular/material/dialog";
import { PopupComponent } from '../popup/popup.component';


interface Country{
  value:number;
  
}

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
dialogRef:MatDialogRef<any> | undefined
  constructor(private dialog:MatDialog){}

 

  ngOnInit(): void {
  }
  public page = {
    count: 10,
    limit: 10,
    offset: 0
  }
  countries = [
    {"country": "US","name": "United State","currency": "GRA"},
    {"country": "IND","name": "India","currency": "INR"},
    {"country": "PK","name": "Pakisthan","currency": "PKR"}
  ];
 
  gopop(){
          this.dialogRef= this.dialog.open(PopupComponent,{
          height:'100%',
          width:'50%'
          });
  }
  
  
  

}
