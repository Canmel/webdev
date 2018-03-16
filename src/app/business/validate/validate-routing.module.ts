import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ValidateComponent} from './validate.component';

const validateRoutes: Routes = [
  {
    path: '', component: ValidateComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(validateRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ValidateRoutingModule {
}
