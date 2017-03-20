// import { Component } from '@angular/core';
// import { Directive, Renderer } from '@angular/core';

// @Component({
//     selector: 'expandable-header',
//     templateUrl: 'expandable-header.html'
// })
// export class ExpandableHeaderComponent {
//     header: any;
//     headerHeight: any;
//     translateAmt: any;
//     scaleAmt: any;
//     ticking: any;
//     constructor(public renderer: Renderer) {
//     }

//     ngOnInit() {

//         this.header = document.getElementsByClassName("strechy-header")[0];
//         this.headerHeight = this.header.clientHeight;
//         this.ticking = false;

//         this.renderer.setElementStyle(this.header, 'height', 'calc( ' + this.headerHeight + 'px - ' + this.translateAmt + 'px )');

//         this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
//         this.renderer.setElementStyle(this.header, 'background-size', 'cover');
//     }

//     onWindowResize(ev) {
//         this.headerHeight = this.header.clientHeight;
//     }

//     onContentScroll(ev) {
//         ev.domWrite(() => {
//             if (!this.ticking) {
//                 this.ticking = true;
//                 this.updateStretchyHeader(ev);
//             }
//             this.ticking = true;
//         });
//     }

//     updateStretchyHeader(ev) {
//         if (ev.scrollTop >= 0) {
//             this.translateAmt = ev.scrollTop / 2;
//             this.scaleAmt = 1;
//         } else {
//             this.translateAmt = 0;
//             this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
//         }
//         this.headerHeight = this.header.clientHeight;
//         this.renderer.setElementStyle(this.header, 'height', 'calc( ' + this.headerHeight + 'px - ' + this.translateAmt + 'px )');

//     }

// }


// <expandable-header headerHeight="400" backgroundHeader="" title="test" showBackButton="true">
// </expandable-header>
