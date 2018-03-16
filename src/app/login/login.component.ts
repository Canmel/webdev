import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import {Urls} from '../public/url';
import {Properties} from '../public/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public localStorage: any;

  constructor(private http: HttpClient, public route: Router) {

  }

  ngOnInit() {
    sessionStorage.clear();
  }

  doLogin(event) {
    const login = this;
    $.ajax({
      url: Urls.SESSION.LOGIN,
      data: {
        username: $('input[name="username"]').val(),
        password: $('input[name="password"]').val(),
        imageCode: $('input[name="imageCode"]').val()
      },
      method: 'POST',
      xhrFields: {
        withCredentials: true
      },
      success: function (resp) {
        sessionStorage.setItem(Properties.STRING.SESSION.AUTHENTICATED, JSON.stringify(resp.authenticated).replace(/\"/g, ''));
        sessionStorage.setItem(Properties.STRING.SESSION.AUTHORITIES, JSON.stringify(resp.authorities).replace(/\"/g, ''));
        sessionStorage.setItem(Properties.STRING.SESSION.DETAILS, JSON.stringify(resp.details).replace(/\"/g, ''));
        sessionStorage.setItem(Properties.STRING.SESSION.NAME, JSON.stringify(resp.name).replace(/\"/g, ''));
        login.route.navigate(['app/home']);
      },
      error: function (e, s, m) {
        console.log('e', e);
        console.log('s', s);
        console.log('m', m);
      }
    });
  }
}
