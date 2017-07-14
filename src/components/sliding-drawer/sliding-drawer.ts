import { Component, Input, ElementRef, Renderer } from '@angular/core';
import { Platform, DomController } from 'ionic-angular';

@Component({
  selector: 'sliding-drawer',
  templateUrl: 'sliding-drawer.html'
})
export class SlidingDrawer {

  @Input('options') options: any;

  handleHeight: number = 50;
  bounceBack: boolean = true;
  thresholdTop: number = 200;
  thresholdBottom: number = 200;

  constructor(
    public element: ElementRef,
    public renderer: Renderer,
    public domCtrl: DomController,
    public platform: Platform
  ) { }

  ngAfterViewInit() {

    if (this.options.handleHeight) {
      this.handleHeight = this.options.handleHeight;
    }

    if (this.options.bounceBack) {
      this.bounceBack = this.options.bounceBack;
    }

    if (this.options.thresholdFromBottom) {
      this.thresholdBottom = this.options.thresholdFromBottom;
    }

    if (this.options.thresholdFromTop) {
      this.thresholdTop = this.options.thresholdFromTop;
    }

    this.renderer.setElementStyle(this.element.nativeElement,
                                  'top',
                                  this.platform.height() - this.handleHeight + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');

    const hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });

  }

  handlePan(ev) {

    const newTop = ev.center.y;

    let bounceToBottom = false;
    let bounceToTop = false;

    if (this.bounceBack && ev.isFinal) {
      const topDiff = newTop - this.thresholdTop;
      const bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;

      topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;

    }

    if ((newTop < this.thresholdTop && ev.additionalEvent === 'panup') || bounceToTop) {
      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', '0px');
      });

    } else if (((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === 'pandown')
                  || bounceToBottom) {
      this.domCtrl.write(() => {
        this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setElementStyle(this.element.nativeElement,
                                      'top',
                                      this.platform.height() - this.handleHeight + 'px');
      });

    } else {
      this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');
      if (newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {
        if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {

          this.domCtrl.write(() => {
            this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
          });

        }
      }
    }
  }
}
