import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('12345',[Validators.required,Validators.minLength(5)]),
    age:new FormControl('23',[Validators.required,Validators.maxLength(2)]),
    phone:new FormControl('1234567890',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('Ajay@gmail.com',[Validators.required,Validators.email]),
    address:new FormControl(''),
    Gender:new FormControl(''),
  })
  ngOnInit(): void {
  }

  loginUser()
    {
    console.warn(this.loginForm.value);
    
    }
  get diagnostic(){
    return JSON.stringify(this.loginForm.value)
  }
  get user()
  {
    return this.loginForm.get('user');
  }
  get password()
  {
    return this.loginForm.get('password')
  }
  get age()
  {
    return this.loginForm.get('age')
  }
  get phone()
  {
    return this.loginForm.get('phone')
  }
  get email()
  {
    return this.loginForm.get('email')
  }
}
