import { Component } from '@angular/core';
import { BlogFeedPage } from '../blog-feed/blog-feed';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WordpressService } from '../wordpress-integration.service';

@Component({
  selector: 'page-wordpress-login',
  templateUrl: 'wordpress-login.html'
})
export class WordpressLoginPage {
  login_form: FormGroup;
  error_message: string;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public wordpressService: WordpressService,
  ) {}

  ionViewWillLoad() {
    this.login_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.required)
    });
  }

  login(value){
    let loading = this.loadingCtrl.create();
    loading.present();

    this.wordpressService.doLogin(value.username, value.password)
    .subscribe(res => {
       this.wordpressService.setUser({
         token: res.json().token,
         username: value.username,
         displayname: res.json().user_display_name,
         email: res.json().user_email
       });

       loading.dismiss();
       this.navCtrl.push(BlogFeedPage);
     },
     err => {
       loading.dismiss();
       this.error_message = "Invalid credentials. Try with username 'aa' password 'aa'.";
       console.log(err);
     })
  }

  skipLogin(){
    this.navCtrl.push(BlogFeedPage);
  }

}
