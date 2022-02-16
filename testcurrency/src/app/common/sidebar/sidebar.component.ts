import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ismenuOpen: any;

  constructor() { }

  ngOnInit(): void {
  }
  menuOpen() {
    this.ismenuOpen = !this.ismenuOpen;
    console.log(this.ismenuOpen)
  }

}
