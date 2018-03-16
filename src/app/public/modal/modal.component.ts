import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  template: string;
  @Input('title') title: string;
  @Input('content') content: string;
  @Input('selector') selector: string;
  @Input('characters') characters: string;

  @Output() commit: EventEmitter<string> = new EventEmitter;
  @Output() closed: EventEmitter<string> = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
    $('#' + this.selector + 'Content').html(this.content);
  }

  render() {
    $('#' + this.selector + 'Content').html($('#' + this.content).html());
    $('#' + this.selector).modal('show');
  }

  closedCallback() {
    this.closed.emit(this.selector + 'Content');
  }

  commitCallback() {
    this.commit.emit(this.selector + 'Content');
  }
}
