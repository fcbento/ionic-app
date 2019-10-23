import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WallComponent } from './wall.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    WallComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: WallComponent }])
  ],
  exports: [
    WallComponent,
    PostsComponent
  ]
})
export class WallModule { }
