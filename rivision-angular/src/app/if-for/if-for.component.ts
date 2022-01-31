import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-for',
  templateUrl: './if-for.component.html',
  styleUrls: ['./if-for.component.scss']
})
export class IfForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isvalid:boolean=false

  onCreatBox(){
    this.isvalid=true
  }
  deletebox(){
    this.isvalid=false
  }

  products=[
    {srno:'',image:'../../assets/meeting2.jpg',name:'laptop',id:'pro01',price:'15000'},
    {srno:'',image:'',name:'mobile' , id:'pro02', price:'8000'},
    {srno:'',image:'',name:'tv' , id:'pro03', price:'12000'},
    {srno:'',image:'',name:'washing machine' , id:'pro04', price:'15000'}
  ]
}
