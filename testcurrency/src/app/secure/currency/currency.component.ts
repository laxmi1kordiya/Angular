import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from "@angular/material/dialog";
import { CurrencypopupComponent } from '../currencypopup/currencypopup.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
dialogRef:MatDialogRef<any> | undefined
  

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  gopop(){
    this.dialogRef=this.dialog.open(CurrencypopupComponent,{
      height:'70%',
      width:'50%'
    })
  
  }
}
