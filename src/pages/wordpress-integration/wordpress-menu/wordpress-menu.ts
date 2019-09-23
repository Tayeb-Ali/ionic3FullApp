import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BlogFeedPage } from '../blog-feed/blog-feed';
import { WordpressLoginPage } from '../wordpress-login/wordpress-login';
import { BlogCategoriesPage } from '../blog-categories/blog-categories';
import { BlogCustomPagesPage } from '../blog-custom-pages/blog-custom-pages';

@Component({
  selector: 'wordpress-menu-page',
  templateUrl: 'wordpress-menu.html'
})
export class WordpressMenuPage {
  items: Array<{title: string, note?: string, component: any}>;

  constructor(
    public nav: NavController
  ) {}

  ionViewWillEnter(){
    this.items = [
      { title: "Recent Posts", component: BlogFeedPage },
      { title: "Authentication", component: WordpressLoginPage },
      { title: "Categories", component: BlogCategoriesPage },
      { title: "Custom Pages", component: BlogCustomPagesPage }
    ];
  }

  itemTapped(event, item) {
    this.nav.push(item.component);
  }
}
