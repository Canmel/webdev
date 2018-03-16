import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {HttpService} from '../public/http.service';
import {ImageCodeComponent} from '../public/image-code/image-code.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    ImageCodeComponent
  ],
  exports: [],
  providers: [HttpService]
})
export class LoginModule {
}
