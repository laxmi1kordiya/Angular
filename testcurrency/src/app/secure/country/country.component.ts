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
// public dataLoding:false;

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

    
    // {"country": "US","currency": "GRA","option":""},
    // {"country": "IND","currency": "INR","option":""},
    // {"country": "PK","currency": "PKR","option":""}
  ];
 
  
  
  
  
  
  gopop(){
          this.dialogRef= this.dialog.open(PopupComponent,{
          height:'100%',
          width:'50%'
          });
  }
  
  
  

}
