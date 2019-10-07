import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public user: any;

  constructor(private menu: MenuController, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  navigate(option: string) {
    this.router.navigate([`home/${option}`]);
    this.menu.close();
  }

}
