import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardIO } from '@ionic-native/card-io';

@Component({
  selector: 'page-credit-card-scan',
  templateUrl: 'credit-card-scan.html'
})
export class CreditCardScanPage {

  constructor(public navCtrl: NavController, public cardIO: CardIO) { }

  ionViewDidLoad() {
    console.log('Hello CreditCardScan Page');
  }

  cardImage = "assets/img/misc/credit-card.png";

  card = {
    cardType: '',
    cardNumber: '',
    redactedCardNumber: '',
    expiryMonth: null,
    expiryYear: null,
    cvv: '',
    postalCode: ''
  }

  scanCard() {
    this.cardIO.canScan()
      .then(
      (res: boolean) => {
        if (res) {
          let options = {
            scanExpiry: true,
            hideCardIOLogo: true,
            scanInstructions: 'Please position your card inside the frame',
            keepApplicationTheme: true,
            requireCCV: true,
            requireExpiry: true,
            requirePostalCode: false
          };
          this.cardIO.scan(options).then(response => {
            console.log("Scan complete");

            let { cardType, cardNumber, redactedCardNumber, expiryMonth, expiryYear, cvv, postalCode } = response;
            this.card = {
              cardType: cardType,
              cardNumber: cardNumber,
              redactedCardNumber: redactedCardNumber,
              expiryMonth: expiryMonth,
              expiryYear: expiryYear,
              cvv: cvv,
              postalCode: postalCode
            }
          });
        }
      });
  }

  // Just to animate the fab
  fabGone = false;
  ionViewWillEnter() {
    this.fabGone = false;
  }

  ionViewWillLeave() {
    this.fabGone = true;
  }

}
