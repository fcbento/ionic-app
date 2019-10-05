import { Component, OnInit } from '@angular/core';
import { FullScreenImage } from '@ionic-native/full-screen-image';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  public img: string = '../assets/bg.jpg'

  constructor() { }

  ngOnInit() {
    FullScreenImage.showImageURL(this.img);

  }

}
