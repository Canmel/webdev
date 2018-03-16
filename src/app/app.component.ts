import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';
import {Properties} from './public/properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public localStorage: any;

  constructor() {
  }

  ngOnInit() {
  }
}
