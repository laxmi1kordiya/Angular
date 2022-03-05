import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-arryform3',
  templateUrl: './arryform3.component.html',
  styleUrls: ['./arryform3.component.scss']
})
export class Arryform3Component implements OnInit {
  public productform:FormGroup;
  constructor(private fb:FormBuilder) {
    this.productform = this.fb.group({
      product:[''],
      name:[''],
      id:[''],
      price:[''],
      skills:this.fb.array([this.addnewskills()])
     });
  }
  ngOnInit(): void {

  }
  get name(){
    return this.productform.get('name')
  }
  get id(){
    return this.productform.get('id')
  }
  get price(){
   return this.productform.get('price')
  }
      
  get skills():FormArray{
      return this.productform.get('skills') as FormArray
  }
  addnewskills() {
    return this.fb.group({
      name1:'',
      id1:'',
      price1:''
    });
  }


  addskill(){
    this.skills.push(this.addnewskills());
  }
  deleteskill(i:number){
    this.skills.removeAt(i)
  }
  loginuser(){
 console.warn(this.productform.value)                                                                                                                                                                                                    
  }
  get diagnostic(){
    return JSON.stringify(this.productform.value)
  }

  

}
