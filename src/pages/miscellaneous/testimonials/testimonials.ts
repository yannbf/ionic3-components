import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-testimonials',
  templateUrl: 'testimonials.html'
})
export class TestimonialsPage {

  testimonials = [
    {
      imageUrl: 'assets/img/misc/testimonial-1.jpg',
      quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
      name: 'Sue Shei',
      position: 'Founder'
    },
    {
      imageUrl: 'assets/img/misc/testimonial-2.jpg',
      quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
      name: 'Will Barrow',
      position: 'Web Designer'
    },
    {
      imageUrl: 'assets/img/misc/testimonial-3.jpg',
      quote: 'The only skills I have the patience to learn are those that have no real application in life.',
      name: 'Indigo Violet',
      position: 'Public Relations'
    },
    {
      imageUrl: 'assets/img/misc/testimonial-1.jpg',
      quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
      name: 'Sue Shei',
      position: 'Founder'
    },
    {
      imageUrl: 'assets/img/misc/testimonial-2.jpg',
      quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
      name: 'Will Barrow',
      position: 'Web Designer'
    },
    {
      imageUrl: 'assets/img/misc/testimonial-3.jpg',
      quote: 'The only skills I have the patience to learn are those that have no real application in life.',
      name: 'Indigo Violet',
      position: 'Public Relations'
    },
  ];

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello Testimonials Page');
  }

}
