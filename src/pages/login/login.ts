import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;


  constructor(
    public nav: NavController,
    public loadingCtrl: LoadingController
  ) {
    this.main_page = { component: TabsNavigationPage };

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('test', Validators.required)
    });
  }

  doLogin(){
    this.nav.setRoot(this.main_page.component);
  }

  doFacebookLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
    // let this = this;

  
        this.loading.dismiss();
    
  }

  doGoogleLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app

        this.loading.dismiss();
  }

  doTwitterLogin(){
    this.loading = this.loadingCtrl.create();
        this.loading.dismiss();
    
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    this.nav.push(ForgotPasswordPage);
  }

}
