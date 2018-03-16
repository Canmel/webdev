import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TipsComponent} from './tips.component';

const tipsRoutes: Routes = [
  {
    path: '', component: TipsComponent,
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(tipsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TipsRoutingModule {
}
