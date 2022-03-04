import { Component, OnInit } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/css/css';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
public customCss: any;
  constructor() { }

  ngOnInit(): void {
  }
  saveCustomCss() {
  
  }
}
