import { BlogPostPage } from './blog-post';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    BlogPostPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogPostPage),
  ],
  exports: [
    BlogPostPage
  ]
})

export class BlogPostPageModule { }
