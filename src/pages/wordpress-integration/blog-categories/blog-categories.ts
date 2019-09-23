import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { WordpressService } from '../wordpress-integration.service';
import { BlogFeedPage } from '../blog-feed/blog-feed';

@Component({
  selector: 'page-blog-categories',
  templateUrl: 'blog-categories.html'
})
export class BlogCategoriesPage {

  categories:any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public wordpressService: WordpressService
  ) {}

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.wordpressService.getCategories()
    .subscribe(data => {
      this.categories = data;
      loading.dismiss();
    });
  }

  itemTapped(event, category) {
    this.navCtrl.push(BlogFeedPage, {
      id: category.id,
      title: category.name
    })
  }

}
