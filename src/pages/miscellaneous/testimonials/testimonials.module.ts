import { TestimonialsPage } from './testimonials';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TestimonialsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestimonialsPage),
  ],
  exports: [
    TestimonialsPage
  ]
})

export class TestimonialsPageModule { }
