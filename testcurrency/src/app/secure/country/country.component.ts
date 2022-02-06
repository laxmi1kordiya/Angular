import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule} from '@swimlane/ngx-datatable'


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // public page = {
  //   count: 10,
  //   limit: 10,
  //   offset: 0
  // }
  // countries = [
  //   {"country": "US","name": "United State","currency": "GRA"},
  //   {"country": "IND","name": "India","currency": "INR"},
  //   {"country": "PK","name": "Pakisthan","currency": "PKR"}
  // ];
  title = 'table-tutorial';
  rows= [ {"Country": "US","Name": "United State","Currency": "GRA"},
  {"Country": "IND","Name": "India","Currency": "INR"},
  {"Country": "PK","Name": "Pakisthan","Currency": "PKR"}
];

}
