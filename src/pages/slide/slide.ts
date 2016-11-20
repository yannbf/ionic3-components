import { SlideColorChangingPage } from './slide-color-changing/slide-color-changing';
import { SliderListPage } from './slider-list/slider-list';
import { SlideCustomPaginationPage } from './slide-custom-pagination/slide-custom-pagination';
// import { SlideMultirowPage } from './slide-multirow/slide-multirow';
import { SlideFreeModePage } from './slide-free-mode/slide-free-mode';
// import { SlideNestedPage } from './slide-nested/slide-nested';
import { SlideRightToLeftPage } from './slide-rtl/slide-rtl';
import { SlideCarouselPage } from './slide-carousel/slide-carousel';
import { SlideTransitionsPage } from './slide-transitions/slide-transitions';
import { SlidePhotoGalleryPage } from './slide-photo-gallery/slide-photo-gallery';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class SlidesPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = SlidesPage;
    this.items = [
      {
        title: 'Slide Transitions',
        page: SlideTransitionsPage
      },
      {
        title: 'Slide Right to Left',
        page: SlideRightToLeftPage
      },
      // {
      //   title: 'Nested Slides',
      //   page: SlideNestedPage
      // },
      {
        title: 'List of Sliders',
        page: SliderListPage
      },
      {
        title: 'Color Changing Sliders',
        page: SlideColorChangingPage
      },
      {
        title: 'Free Mode Slide (no fixed positions)',
        page: SlideFreeModePage
      },
      {
        title: 'Custom Pagination',
        page: SlideCustomPaginationPage
      },
      {
        title: 'Carousel',
        page: SlideCarouselPage
      },
      {
        title: 'Photo Gallery (not working)',
        page: SlidePhotoGalleryPage
      },
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
