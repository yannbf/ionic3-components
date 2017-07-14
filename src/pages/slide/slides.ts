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
      // {
      //   title: 'Carousel',
      //   page: 'SlideCarouselPage'
      // },
      {
        title: 'Color changing sliders',
        page: 'SlideColorChangingPage'
      },
      {
        title: 'Custom pagination',
        page: 'SlideCustomPaginationPage'
      },
      {
        title: 'Free mode slide (no fixed positions)',
        page: 'SlideFreeModePage'
      },
      {
        title: 'List of Sliders',
        page: 'SliderListPage'
      },
      {
        title: 'Nested slides',
        page: 'SlideNestedPage'
      },
      {
        title: 'Slide transitions',
        page: 'SlideTransitionsPage'
      },
      {
        title: 'Slide right to left',
        page: 'SlideRightToLeftPage'
      },
      {
        title: 'Slide with pagination arrows',
        page: 'SliderWithArrowsPage'
      },
      {
        title: 'Slide Walkthrough',
        page: 'SlideWalkthroughPage'
      }
      // {
      //   title: 'Photo Gallery (not working)',
      //   page: 'SlidePhotoGalleryPage'
      // },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
