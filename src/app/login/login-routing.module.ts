import {NgModule, OnInit} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

import {LoginComponent} from './login.component';

/**
 * 主体路由
 */
const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class LoginRoutingModule {
}
