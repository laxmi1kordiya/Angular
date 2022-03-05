import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private _restService:RestService) {

   }
   lstcomments:Users[] | undefined;
  
  
  ngOnInit(): void {
    this._restService.getcomments()
    .subscribe
    (
      data=>
     {
      this.lstcomments =data;
     }
    );
  }

}
