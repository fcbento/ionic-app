import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WallComponent } from './wall.component';

@NgModule({
  declarations: [
    WallComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: WallComponent }])
  ],
  exports: [
    WallComponent
  ]
})
export class WallModule { }
