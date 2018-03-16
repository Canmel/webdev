import {NgModule, OnInit} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {MainComponent} from './main.component';

/**
 * 主体路由
 */
const mainRoutes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: 'menu',
    loadChildren: 'app/business/menus/menus.module#MenuModule'
  }, {
    path: 'home',
    loadChildren: 'app/business/home/home.module#HomeModule'
  }, {
    path: 'charts',
    loadChildren: 'app/business/charts/charts.module#ChartsModule'
  }, {
    path: 'tables',
    loadChildren: 'app/business/tables/tables.module#TablesModule'
  }, {
    path: 'pagination',
    loadChildren: 'app/business/pagination/page.module#PageModule'
  }, {
    path: 'tips',
    loadChildren: 'app/business/tips/tips.module#TipsModule'
  }, {
    path: 'validate',
    loadChildren: 'app/business/validate/validate.module#ValidateModule'
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
