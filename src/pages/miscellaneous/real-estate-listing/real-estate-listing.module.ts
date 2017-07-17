import { SharedModule } from '../../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealEstateListingPage } from './real-estate-listing';

@NgModule({
  declarations: [
    RealEstateListingPage,
  ],
  imports: [
    IonicPageModule.forChild(RealEstateListingPage),
    SharedModule,
  ],
  exports: [
    RealEstateListingPage
  ]
})
export class RealEstateListingPageModule {}
