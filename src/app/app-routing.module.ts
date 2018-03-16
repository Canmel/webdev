import {NgModule} from '@angular/core';
import {RouterModule, Routes, ActivatedRoute} from '@angular/router';

import {PageNotFoundComponent} from './error-page/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'app',
    loadChildren: 'app/main/main.module#MainModule'
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
