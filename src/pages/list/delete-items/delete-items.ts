import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item, ItemSliding } from 'ionic-angular';

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
  ]
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
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteItemsPage');
  }
  addThing(){
  	console.log('add thing');
  	this.things.push({title: 'Thing ' + (+this.things.length+1)})
  }
  addItem(){
  	console.log('add item');
  	this.items.push({title: 'Item ' + (+this.items.length+1)})
  }
	openOption(itemSlide: ItemSliding, item: Item, event) {
		console.log('opening item slide..');
		event.stopPropagation(); //here if you want item to be tappable
		if(this.activeItemSliding!==null){ //use this so that only one active sliding item allowed
			this.closeOption();
		}
		this.activeItemSliding = itemSlide;
		let swipeAmount = 33; //set your required swipe amount
		//to do, can we make this width calculated? 
		console.log('swipe amount ', itemSlide);
		// console shows itemSlide._optsWidthRightSide is calculated, but it's a private var

		itemSlide.startSliding(swipeAmount);
		itemSlide.moveSliding(swipeAmount);

		itemSlide.setElementClass('active-options-right', true);
		item.setElementStyle('transition', null);
		item.setElementStyle('transform', 'translate3d(-'+swipeAmount+'px, 0px, 0px)');
  }

	closeOption() {
		console.log('closing item slide..');

		if(this.activeItemSliding) {
			this.activeItemSliding.close();
			this.activeItemSliding = null;
		}
	}
}
