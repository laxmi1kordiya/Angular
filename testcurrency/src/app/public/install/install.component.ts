import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent implements OnInit {

  public loginform:FormGroup ;
  
  

  constructor(private fb:FormBuilder, private router:Router) { 
    this.loginform =this.fb.group({
     url:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  get url(){
    return this.loginform.get('url')
  }
  goTo(){
  
    this.router.navigate(['/dashboard'])
  }

}
