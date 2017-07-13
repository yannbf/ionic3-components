import { Component } from '@angular/core';
import { IonicPage, NavController, Item, ItemSliding } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-delete-items',
  templateUrl: 'delete-items.html',
})
export class DeleteItemsPage {

  activeItemSliding: ItemSliding = null;

  items = [
    {
      title: 'Item 1',
    },
    {
      title: 'Item 2',
    },
    {
      title: 'Item 3',
    },
  ];

  things = [
    {
      title: 'Thing 1',
    },
    {
      title: 'Thing 2',
    },
    {
      title: 'Thing 3',
    },
  ];

  constructor(public navCtrl: NavController) { }

  addThing() {
  	console.log('add thing');
  	this.things.push({ title: 'Thing ' + (this.things.length + 1) });
  }

  addItem() {
  	console.log('add item');
  	this.items.push({ title: 'Item ' + (this.items.length + 1) });
  }

  deleteItem(list, index) {
    list.splice(index,1);
  }

  openOption(itemSlide: ItemSliding, item: Item, event) {
    console.log('opening item slide..');
    event.stopPropagation(); // here if you want item to be tappable
    if (this.activeItemSliding) { // use this so that only one active sliding item allowed
      this.closeOption();
    }

    this.activeItemSliding = itemSlide;
    const swipeAmount = 33; // set your required swipe amount

    console.log('swipe amount ', swipeAmount);
    itemSlide.startSliding(swipeAmount);
    itemSlide.moveSliding(swipeAmount);

    itemSlide.setElementClass('active-slide', true);
    itemSlide.setElementClass('active-options-right', true);
    item.setElementStyle('transition', null);
    item.setElementStyle('transform', 'translate3d(-' + swipeAmount + 'px, 0px, 0px)');
  }

  closeOption() {
    console.log('closing item slide..');

    if (this.activeItemSliding) {
      this.activeItemSliding.close();
      this.activeItemSliding = null;
    }
  }
}
