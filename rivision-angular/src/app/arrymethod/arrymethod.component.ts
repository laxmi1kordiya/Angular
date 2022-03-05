import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrymethod',
  templateUrl: './arrymethod.component.html',
  styleUrls: ['./arrymethod.component.scss']
})
export class ArrymethodComponent implements OnInit {
  public add ='';
  public add1 ='';
  constructor() { }
 fruits = ["Banana", "Orange", "Apple", "Mango"];
 string=this.fruits.toString();
 join=this.fruits.join('+');

 fruit = ["Banana", "Orange", "Apple", "Mango"];
 pop=this.fruit.pop();

 name = ["dwij", "mona", "geeta", "payal"];
 push=this.name.push('ajay');

 name1 = ["dwij", "mona", "geeta", "payal"];
 shift=this.name1.shift();

 word = ["1","2","3","4","5"];
 unshift=this.word.unshift("6");


 word1 = ["1","2","3","4","5"];
 change=this.word1[3]="6";

 word2 = ["1","2","3","4","5","6","7","8","9","10"];
 change1=this.word2[+5]="0";

 firstname =["dwij", "mona", "geeta", "payal"]
 lastname =["vaishnani","kordiya","pandya",]
 middelename=['sureshbhai','mohanbhai']
fullname =this.firstname.concat(this.lastname,this.middelename);
 concat =this.firstname.concat('rahul')

 fruits2 = ["Banana", "Orange", "Apple", "Mango"];
 splice =this.fruits2.splice(2,0,"lemon","onion")

 fruits4 = ["Banana", "Orange", "Apple", "Mango"];
 remove =this.fruits4.splice(0,2)

 fruits3 = ["Banana", "Orange", "Apple", "Mango"];
 slice =this.fruits3.slice(1,3)

//  variables

 a=5;
 b=6;
 c=this.a+this.b;

 a1=["name","rahul","city","rajkot"];

// function name(params:type) {
  

   
 res= function(a:number,b:number){
   return a*b
 } 
 toCelsius= function (fahrenheit: number){
  return (5/9) * (fahrenheit-32);
} 

//  factorial= function(number: number){
//   if(number<=0){
//     return 1;
//   } else{
//     return(number * (number-1));
//   }
// };
// object
car1="laxmi"
car={type:"fiat" ,model:500,color:"white" }
name3 ={
  firstname:"john",
  lastname:"dave",
  age:"50",
  eyecolor:"blue"
}
 


 ngOnInit(): void {
}
// event
onclick(){
  console.log("hello");
  this.add="hello"
}
onclick1(event: any){
  console.log(event);
  this.add1="hello how are you"
}
 
  

}



