import { Component } from '@angular/core';
import { LoadingController, NavParams } from 'ionic-angular';
import { WordpressService } from '../wordpress-integration.service';

@Component({
  selector: 'page-blog-custom-page',
  templateUrl: 'blog-custom-page.html'
})
export class BlogCustomPagePage {

  pageId:any;
  page:any;

  constructor(
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public wordpressService: WordpressService
  ) {}

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.pageId = this.navParams.get('id');

    this.wordpressService.getCustomPage(this.pageId)
    .subscribe(data => {
      this.page = data;
      loading.dismiss();
    });
  }

}
