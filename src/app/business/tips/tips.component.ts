import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  providers: [BsModalService]
})
export class TipsComponent implements OnInit {

  modalOptions = {
    selector: 'myModal',
    title: '模态框标题',
    content: 'modalContent',
    characters: '提示模态框'
  };

  htmlModalOptions = {
    selector: 'htmlModal',
    title: 'DOM模态框',
    characters: 'DOM模态框',
    content: 'htmlContent'
  };

  // public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  // showSecond(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  // }

  ngOnInit() {
  }

  infoTips() {
    initScript.infoMsg('自定义提示信息标题', '自定义信息提示');
  }

  successTips() {
    initScript.successMsg('自定义提示信息标题', '自定义成功信息');
  }

  dangerTips() {
    initScript.errorMsg('自定义提示信息标题', '自定义错误信息');
  }

  modalCommit(contentSelector) {
    console.log('commit callback，modal context dom id:', contentSelector);
  }

  modalClosed(contentSelector) {
    console.log('close callback，modal context dom id:', contentSelector);
  }


}
