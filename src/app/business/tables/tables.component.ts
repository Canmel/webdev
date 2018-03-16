import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  users: Object[];

  constructor() {
  }

  ngOnInit() {
    this.users = [
      {username: '姓名', email: 'email@ee.com', tel: '13788889999'},
      {username: '姓名2', email: 'email@ee.com', tel: '13788889999'},
    ];
  }

  renderForm() {
    initScript.successMsg('操作提示', '编辑用户成功');
    initScript.infoMsg('操作提示', '编辑用户信息');
    initScript.errorMsg('操作提示', '编辑用户失败');
  }

}
