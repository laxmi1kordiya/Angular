import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public fullSidebar: boolean = true;
  public color:['hello']
  @Output() sidebarBehaviour = new EventEmitter<boolean>();
  @Output() colorchange = new EventEmitter();

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  changeSidebar() {
    console.log("before",this.fullSidebar)
    this.fullSidebar = !this.fullSidebar;
    console.log("after",this.fullSidebar)
   console.log(this.sidebarBehaviour.emit(this.fullSidebar));
  }
  help(){
    this.router.navigate(['/help'])
  }
  changeColor(){
    this.colorchange.emit(this.color)
// this.color = !this.color;
// console.log(this.colorchange.emit(this.color));
  }

}
