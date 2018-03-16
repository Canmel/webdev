import {NgModule} from '@angular/core';
import {PageComponent} from './page.component';
import {PageRoutingModule} from './page-routing.module';
import {PaginationComponent} from '../../public/pagination/pagination.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    PageRoutingModule,
    CommonModule
  ],
  declarations: [
    PageComponent,
    PaginationComponent
  ],
  exports: [],
  providers: []
})
export class PageModule {
}
