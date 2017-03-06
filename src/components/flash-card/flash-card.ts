import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {
  @ViewChild('fcContainer') fcContainer;
  @ViewChild('front') fcFront;
  @ViewChild('back') fcBack;
   toggled: boolean = false;
 
  constructor(private flashCard: ElementRef) {
  }
  ngAfterViewChecked(){
    let frontH = this.fcFront.nativeElement.querySelector('.fc-front').offsetHeight + 40;
    let backH = this.fcBack.nativeElement.querySelector('.fc-back').offsetHeight + 40;
    let h = ((frontH > backH)? frontH:backH) + 'px';
    this.fcContainer.nativeElement.style.height = h;
    this.fcBack.nativeElement.style.height = h;
    this.fcFront.nativeElement.style.height = h;
  }
  toggle() {
    this.toggled = !this.toggled;
  }

}
