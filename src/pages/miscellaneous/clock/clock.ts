import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-clock',
  templateUrl: 'clock.html'
})
export class ClockPage {

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello Clock Page');
  }

  ngOnInit() {
    this.start();
  }

  public date = new Date();
  hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  interval;

  getOrdinal(minute) {
    if (minute < 5) {
      return 'oclock';
    } else if (minute < 35) {
      return 'past';
    } else {
      return 'to';
    }
  }

  getMinute(minute) {
    if (minute < 5) {
      return;
    }
    if (minute < 10 || minute >= 55) {
      return 'fivepast';
    }
    if (minute < 15 || minute >= 50) {
      return 'tenpast';
    }
    if (minute < 20 || minute >= 45) {
      return 'quarterpast';
    }
    if (minute < 25 || minute >= 40) {
      return 'twentypast';
    }
    if (minute < 30 || minute >= 35) {
      return 'twentyfivepast';
    }
    return 'halfpast';
  }

  addActiveClasses(blocks) {
    var i;

    // for (i = 0; i < blocks.length; i++) {
    //   let elements = document.getElementsByClassName(blocks[i]);
    //   for (var j = 0; j < elements.length; j++) {
    //     elements[i].className = elements[i].className + ' block--active';
    //   }
    //   //$('.' + blocks[i]).addClass('block--active');
    // }
  }

  setRange(minute, second) {
    var max = 5,
      maxInSecs = max * 60,
      elapsed = (minute % max) * 60 + second,
      percent = elapsed / maxInSecs * 100 + '%';

    //$('.range__slider').width(percent);
  }

  tick() {
    var hour = this.date.getHours() % 12,
      minute = this.date.getMinutes(),
      second = this.date.getSeconds(),
      hourClass = minute < 35 ? this.hours[hour] : this.hours[hour + 1],
      activeBlocks = [
        'its',
        this.getMinute(minute),
        this.getOrdinal(minute),
        hourClass
      ];

    this.date = new Date();
    // let elements = document.getElementsByClassName('block--active');
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].className.replace('comment-body', '');
    // }
    //$('.block--active').removeClass('block--active');
    this.addActiveClasses(activeBlocks);
    this.setRange(minute, second);
  }

  // Public functions

  start() {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  }

  pause() {
    if (!this.interval) return;
    clearInterval(this.interval);
  }

  stop() {
    this.pause();
    // let elements = document.getElementsByClassName('block--active');
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].className.replace('comment-body', '');
    // }
    //$('.block--active').removeClass('block--active');
  }

}


