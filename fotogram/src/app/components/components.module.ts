import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    PostComponent,
    PostsComponent],
    exports: [
      PostComponent,
    PostsComponent
    ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
