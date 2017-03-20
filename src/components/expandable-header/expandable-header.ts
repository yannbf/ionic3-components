import { Directive, ElementRef, Renderer } from '@angular/core';
@Directive({
  selector: '[expandable-header]'
})
export class ExpandableHeaderComponent {
  scrollerHandle: any;
  header: any;
  headerHeight: any;
  translateAmt: any;
  scaleAmt: any;
  scrollTop: any;
  lastScrollTop: any;
  ticking: any;

  constructor(public element: ElementRef, public renderer: Renderer) {

  }

  ngOnInit() {

    this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = this.scrollerHandle.firstElementChild;
    this.headerHeight = this.scrollerHandle.clientHeight;
    this.ticking = false;

    this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');

    window.addEventListener('resize', () => {
      this.headerHeight = this.scrollerHandle.clientHeight;
    }, false);

    this.scrollerHandle.addEventListener('scroll', () => {
      console.log('test');
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateElasticHeader();
        });
      }

      this.ticking = true;

    });

  }

  updateElasticHeader() {

    this.scrollTop = this.scrollerHandle.scrollTop;

    if (this.scrollTop >= 0) {
      this.translateAmt = this.scrollTop / 2;
      this.scaleAmt = 1;
    } else {
      this.translateAmt = 0;
      this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
    }

    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
    this.ticking = false;

  }
}
