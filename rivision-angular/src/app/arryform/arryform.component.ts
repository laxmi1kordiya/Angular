import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';


@Component({
  selector: 'app-arryform',
  templateUrl: './arryform.component.html',
  styleUrls: ['./arryform.component.scss']
})
export class ArryformComponent implements OnInit {
  public loginform: FormGroup;
 
  constructor(private fb:FormBuilder) {
    this.loginform =this.fb.group({
    name:[''],
    subject:[''],
    mark:[''],
    skills:this.fb.array([this.newaddskills()]),
    });
  }
  ngOnInit(): void {
  }
   get subject(){
     return this.loginform.get('subject')
   }
   get mark(){
     return this.loginform.get('mark')
   }
   get skills() : FormArray{
     return this.loginform.get('skills') as FormArray;
   }
    newaddskills() {
    return this.fb.group({
      sub:'',
      marks:''
    })
   }
   addskill(){
    this.skills.push(this.newaddskills())
    }
    deleteskill(i: number){
      this.skills.removeAt(i);

    }
    loginUser(){
      console.warn(this.loginform.value);
    }
    get diagnostic(){
      return JSON.stringify(this.loginform.value);
    }

}
