import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = SlidesPage;
    this.items = [
      {
        title: 'Slide Transitions',
        page: 'SlideTransitionsPage'
      },
      {
        title: 'Slide Right to Left',
        page: 'SlideRightToLeftPage'
      },
      // {
      //   title: 'Nested Slides',
      //   page: SlideNestedPage
      // },
      {
        title: 'List of Sliders',
        page: 'SliderListPage'
      },
      {
        title: 'Color Changing Sliders',
        page: 'SlideColorChangingPage'
      },
      {
        title: 'Free Mode Slide (no fixed positions)',
        page: 'SlideFreeModePage'
      },
      {
        title: 'Custom Pagination',
        page: 'SlideCustomPaginationPage'
      },
      {
        title: 'Carousel',
        page: 'SlideCarouselPage'
      },
      {
        title: 'Photo Gallery (not working)',
        page: 'SlidePhotoGalleryPage'
      },
    ]
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
