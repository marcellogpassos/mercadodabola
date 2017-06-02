import { Component } from '@angular/core';
import { AlertController, IonicPage, Loading, LoadingController, NavController } from 'ionic-angular';

import { HomePage } from "../home/home";

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

import { LoginException } from "../../exceptions/login-exception";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
  }

  public createAccount() {
    // this.navCtrl.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials)
      .subscribe(user => {
        if (user)
          this.navCtrl.setRoot(HomePage);
        else
          this.showError(new LoginException());
      }, error => this.showError(error));
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(error) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: error.getMessage(),
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
