import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  paginationParams = {
    totalCount: 66,
    pageSize: 10,
    totalPage: 7,
    curPage: 1
  };

  constructor() {
  }

  ngOnInit() {
    this.paginationParams.totalCount = 69;
  }


  getPageData(event) {
    console.log('分页回调', event);
  }
}
