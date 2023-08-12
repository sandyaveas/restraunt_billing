import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.css']
})
export class ConfirmBoxComponent implements OnInit {

  private _show: boolean = false;
  @Input()
  public set show(show: boolean) {
    this._show = show;
  }
  public get show() {
    return this._show;
  }

  @Input() type: string = '';
  @Input() title: string = '';
  @Input() bodyText: string = '';
  @Input() okBtnText = '';
  @Input() cancelBtnText = '';
  @Output() onOk = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  okClass: string = 'btn-';
  headerClass: string = 'header-';

  constructor() { }

  ngOnInit(): void {
    if (this.type == 'success') {
      this.okClass += this.type;
      this.headerClass += this.type;
    }
    else if (this.type == 'danger') {
      this.okClass += this.type;
      this.headerClass += this.type;
    }
    else if (this.type == 'info') {
      this.okClass += this.type;
      this.headerClass += this.type;
    }
    else if (this.type == 'warning') {
      this.okClass += this.type;
      this.headerClass += this.type;
    }
  }

  okClick(): void {
    this.onOk.emit();
  }

  cancelClick(): void {
    this.onCancel.emit();
  }

}
