import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public user = { email: '', password: '' };
  public loading: any;
  public passwordHidden: boolean = false;
  public passwordShowed: boolean = true;
  public type: string = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private auth: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {

    let EMAILPATTERN = this.EmailValidator();

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EMAILPATTERN)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }

  public logForm() {
    this.presentLoadingWithOptions();

    this.auth.loginUser(this.form.value).subscribe(data => {
      if (data) {
        this.router.navigate(['/home'])
      }
    }, (e) => {
      this.presentAlert(e.error);
    });

  }

  public EmailValidator() {
    return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  }

  displayPassword() {
    this.passwordShowed = false;
    this.passwordHidden = true;
    this.type = 'text';
  }

  hidePassword() {
    this.passwordShowed = true;
    this.passwordHidden = false;
    this.type = 'password';
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      duration: 1000,
      message: 'Authenticating...',
      //translucent: true,
      showBackdrop: true,
      animated: true,
      cssClass: 'loading'
    });
    return await loading.present();
  }
  async presentAlert(error) {
    console.log(error)
    const alert = await this.alertController.create({
      //header: 'Alert',
      subHeader: error.title,
      message: error.message,
      buttons: ['OK']
    });

    await alert.present();
  }
}



