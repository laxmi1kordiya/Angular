import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-arryform2',
  templateUrl: './arryform2.component.html',
  styleUrls: ['./arryform2.component.scss']
})
export class Arryform2Component implements OnInit {
  public userFormGroup: FormGroup;  
  constructor(private fb:FormBuilder) { 
    this.userFormGroup=this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: [''],
    password: [''],
    skills:this.fb.array([this.newaddskills()]),
    });
  }

    ngOnInit(): void {
    }
    get firstName(){
      return this.userFormGroup.get('firstName')
    }
    get lastName(){
      return this.userFormGroup.get('lastName')
    }
    get userName(){
      return this.userFormGroup.get('userName')
    }
    get password(){
      return this.userFormGroup.get('password')
    }

    get skills() : FormArray{
      return this.userFormGroup.get('skills') as FormArray
     }
    newaddskills()  {
    return this.fb.group({
      add:'',
     })
    }
    
  
   addskill() {
    this.skills.push(this.newaddskills())
    }
    removeskill(i:number){
      this.skills.removeAt(i)

    }




 


  loginUser(){
    console.warn(this.userFormGroup.value)
  }
  resetForm(){
    this.userFormGroup.reset({with:["firstName","lastName","userName","password"]})
  }

}
