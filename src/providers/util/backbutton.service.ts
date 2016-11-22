// import { Injectable } from '@angular/core';

// import { Platform, Events, ToastController, MenuController } from 'ionic-angular';

// /*
//   Handles Hardware Back Button functions. Only works on Android and Windows devices
// */
// @Injectable()
// export class HardwareBackButtonService {

//     private _didBackAlready = false;

//     constructor(
//         private _platform: Platform,
//         private _events: Events,
//         private _menuCtrl: MenuController,
//         private _toastCtrl: ToastController
//     ) {
//     }

//     /**
//      * Execute a callback function on back
//      */
//     callbackOnBack(fn) {
//         this._platform.registerBackButtonAction(() => {
//             fn();
//         });
//     }

//     /**
//      * Toggle the left nav menu on back 
//      * Also will display a toast message stating that the app will close on next back button click
//      * @param  {boolean} doubleBackToExit
//      */
//     toggleMenuOnBack(doubleBackToExit = false) {
//         this._platform.registerBackButtonAction(() => {
//             // Open the menu 
//             this._menuCtrl.toggle();

//             if (doubleBackToExit) {
//                 //If its first time clicking back button, show toast that they need to click back button again
//                 if (!this._didBackAlready) {
//                     this._didBackAlready = true;
//                     this._presentToast("Press back button again to exit");
//                     setTimeout(() => this._didBackAlready = false, 2000);
//                     return;
//                 }

//                 // Exit App
//                 this._platform.exitApp();
//             }

//         });
//     }

//     /**
//      * Require double back button to exit from the app
//      */
//     doubleBackToExit() {
//         this._platform.registerBackButtonAction(() => {

//             //If its first time clicking back button, show toast that they need to click back button again
//             if (!this._didBackAlready) {
//                 this._didBackAlready = true;
//                 this._presentToast("Press back button again to exit");
//                 setTimeout(() => this._didBackAlready = false, 2000);
//                 return;
//             }

//             // Exit App
//             this._platform.exitApp();
//         });
//     }


//     /**
//      * Present Content as a toast message
//      * @param  {string} content
//      */
//     private _presentToast(content: string) {
//         let toast = this._toastCtrl.create({
//             message: content,
//             position: 'bottom',
//             duration: 2000,
//         });

//         toast.present();
//     }


//     /* Use as follow in your page:
//       ionViewDidEnter() {
//           // Setup Back Button Behavior
//           this._backBtn.callbackOnBack(() => {
//             this.navCtrl.pop();
//           });
//         }
//     */
//     /**
//    * Make Desktop Browser back button function better
//    */
//     private _setupBrowserBackButtonBehavior() {

//         // If on web version (browser)
//         if (window.location.protocol !== "file:") {

//             // Listen to browser pages
//             this._events.subscribe("navController:current", (navCtrlData) => {
//                 this._innerNavCtrl = navCtrlData[0];
//             });

//             // Register browser back button action(s)
//             window.onpopstate = (evt) => {

//                 // Close menu if open
//                 if (this._menu.isOpen()) {
//                     this._menu.close();
//                     return;
//                 }

//                 // Close any active modals or overlays
//                 let activePortal = this._ionicApp._loadingPortal.getActive() ||
//                     this._ionicApp._modalPortal.getActive() ||
//                     this._ionicApp._toastPortal.getActive() ||
//                     this._ionicApp._overlayPortal.getActive();

//                 if (activePortal) {
//                     activePortal.dismiss();
//                     return;
//                 }

//                 // Navigate back on main active nav if there's a page loaded
//                 if (this._app.getActiveNav().canGoBack()) {
//                     this._app.getActiveNav().pop();
//                 };

//             };

//             // Fake browser history on each view enter
//             this._app.viewDidEnter.subscribe((app) => {
//                 history.pushState(null, null, "");
//             });

//         }
//     }

// }