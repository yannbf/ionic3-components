import { Directive, EventEmitter, Output, Input, ElementRef, OnInit } from '@angular/core';

import { Content } from 'ionic-angular';

@Directive({
  selector: '[is-visible]'
})
export class IsVisibleDirective implements OnInit {

  @Output('visible') emitVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input('content') content: Content;
  @Input('threshold') threshold: number = 0;

  private rect: any;
  private height: number;

  constructor(public el: ElementRef) {
  }

  public isVisable() {
    this.rect = this.el.nativeElement.getBoundingClientRect();
    const bottom = this.getBottom();
    const top = this.getTop();
    const above = bottom < 0;
    const below = (top - this.height) >= 0;
    const isVisible = !above && !below;
    this.emitVisible.emit(isVisible);
  }

  public initProp() {
    this.height = this.el.nativeElement.offsetParent.clientHeight;
  }

  public initListener() {
    this.content.ionScroll.subscribe(() => {
      this.isVisable();
    });
  }

  private getBottom() {
    return this.threshold ? this.rect.bottom - ((this.threshold / 100) * this.rect.bottom) : this.rect.bottom;
  }

  private getTop() {
    return this.threshold ? this.rect.top - ((this.threshold / 100) * this.rect.top) : this.rect.top;
  }

  ngOnInit() {
    this.initProp();
    this.initListener();
    this.isVisable();
  }

}
