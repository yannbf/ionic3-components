import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide-carousel',
  templateUrl: 'slide-carousel.html'
})
export class SlideCarouselPage {

  mySlideOptions = {
    slidesPerView: 'auto',
    // watchSlidesVisibility: true,
    centeredSlides: true,
    // observer: true,
    // passiveListeners: false,
    // loop: true,
    // lazyLoading: true,
    spaceBetween: 9
  };

  city1: any = {
    name: 'Paris',
    favorited: false,
    image: 'http://bit.ly/2aXzczV',
    authorPic: 'http://bit.ly/2dMCa9y',
    favoriteCount: 10,
    comments: [1, 2, 3],
  };

  city2: any = {
    name: 'London',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'http://bit.ly/26lzMu0',
    favoriteCount: 10,
    comments: [1, 2, 3],
  };

  city3: any = {
    name: 'Gramalote',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'http://bit.ly/2dW9ZEl',
    favoriteCount: 10,
    comments: [1, 2, 3],
  };

  city4: any = {
    name: 'Vladivostok',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'http://bit.ly/2e0NFe4',
    favoriteCount: 10,
    comments: [1, 2, 3],
  };

  water1: any = {
    name: 'Water1',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'https://placeimg.com/600/400/nature',
    favoriteCount: 10,
    comments: [1, 2, 3],
  };

  water2: any = {
    name: 'Water2',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'https://placeimg.com/600/400/nature',
    favoriteCount: 5,
    comments: [1],
  };

  water3: any = {
    name: 'Water3',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'https://placeimg.com/600/400/nature',
    favoriteCount: 2,
    comments: [1],
  };

  water4: any = {
    name: 'Water4',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'https://placeimg.com/600/400/nature',
    favoriteCount: 8,
    comments: [1, 4, 2, 3],
  };

  water5: any = {
    name: 'Water5',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'https://placeimg.com/600/400/nature',
    favoriteCount: 4,
    comments: [1, 4, 2],
  };

  water6: any = {
    name: 'Water6',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'https://placeimg.com/600/400/nature',
    favoriteCount: 7,
    comments: [1, 4],
  };

  water7: any = {
    name: 'Water7',
    favorited: false,
    authorPic: 'http://bit.ly/2dMCa9y',
    image: 'https://placeimg.com/600/400/nature',
    favoriteCount: 8,
    comments: [1, 4, 2, 3],
  };

  // Starting with an empty slider
  citiesSlides: any = [];

  // cities: any = {city1, city2, city3, city4};
  cities: any = [];

  // water: any = {water1, water2, water3, water4, water5, water6, water7};
  water: any = [];

  toggle: number = 0;

  constructor(public navCtrl: NavController) {
    this.cities = [this.city1, this.city2, this.city3, this.city4];
    this.citiesSlides = this.cities;
    this.water = [this.water1, this.water2, this.water3, this.water4, this.water5, this.water6, this.water7];
  }

  addingNewCity() {
    const newCity: any = {
      name: 'NewCity',
      favorited: false,
      authorPic: 'http://bit.ly/2dMCa9y',
      image: 'http://placekitten.com/g/900/550',
      favoriteCount: 0,
      comments: [],
    };

    this.cities.push(newCity);
  }

  changeCities() {
    if (this.toggle === 0) {

      this.toggle = 1;
      this.citiesSlides = this.cities;

    } else if (this.toggle === 1) {

      this.toggle = 2;
      this.citiesSlides = this.water;

    } else {

      this.toggle = 0;
      this.citiesSlides = [];

    }
  }

  goToCityPage(city, event) {
    console.log('Going to city' + city);
  }

  goToProfilePage() {
    // this.navCtrl.push(ContactPage)
  }

  toggleFavorite(city, event) {
    console.log('in the ToggleFavorite() with ', city.name);

    event.preventDefault();

    city.favorited = !city.favorited;
    if (city.favorited) {
      city.favoriteCount++;
    } else {
      city.favoriteCount--;
    }
  }

}
