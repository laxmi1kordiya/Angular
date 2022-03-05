import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';


@Component({
  selector: 'app-arryform',
  templateUrl: './arryform.component.html',
  styleUrls: ['./arryform.component.scss']
})
export class ArryformComponent implements OnInit {
  public loginForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
    this.loginForm =this.fb.group({
    name:[''],
    subject:[''],
    mark:[''],
    skills:this.fb.array([this.newaddskills()])
    });
  }
  ngOnInit(): void {
  }
   get subject(){
     return this.loginForm.get('subject')
   }
   get mark(){
     return this.loginForm.get('mark')
   }
   get skills() : FormArray{
     return this.loginForm.get('skills') as FormArray;
   }
    newaddskills() {
    return this.fb.group({
      subject1:'',
      mark1:''
    });
   }
   addskill(){
    this.skills.push(this.newaddskills());
    }
    deleteskill(i: number){
      this.skills.removeAt(i);

    }
    loginUser(){
      console.warn(this.loginForm.value);
    }
    get diagnostic(){
      return JSON.stringify(this.loginForm.value);
    }

}
