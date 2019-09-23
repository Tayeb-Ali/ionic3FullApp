import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { WordpressService } from '../wordpress-integration.service';
import { BlogCustomPagePage } from '../blog-custom-page/blog-custom-page';

@Component({
  selector: 'page-blog-custom-pages',
  templateUrl: 'blog-custom-pages.html'
})
export class BlogCustomPagesPage {

  pages:any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public wordpressService: WordpressService
  ) {}

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.wordpressService.getCustomPages()
    .subscribe(data => {
      this.pages = data;
      loading.dismiss();
    });
  }

  itemTapped(event, page) {
    this.navCtrl.push(BlogCustomPagePage, {
      id: page.id,
      title: page.title
    })
  }

}
