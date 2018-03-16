import {Component, OnInit} from '@angular/core';
import {Properties} from '../public/properties';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public localStorage: any;
  currentUser = {name: ''};

  constructor(public router: Router) {
    if (!sessionStorage.getItem(Properties.STRING.SESSION.AUTHENTICATED)) {
      this.router.navigate(['login']);
    }
    this.currentUser.name = sessionStorage.getItem(Properties.STRING.SESSION.NAME);
  }

  ngOnInit() {
    this.initHtml();
  }

  initHtml() {
    initScript.main();
  }

}
