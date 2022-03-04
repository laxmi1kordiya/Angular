import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ismenuOpen: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  menuOpen() {
    this.ismenuOpen = !this.ismenuOpen;
    console.log(this.ismenuOpen)
  }
  logout(){
    this.router.navigate(['/install'])
  }

}
