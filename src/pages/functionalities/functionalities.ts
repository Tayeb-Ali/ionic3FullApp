import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactCardPage } from '../contact-card/contact-card';
import { VideoPlaylistPage } from '../video-playlist/video-playlist';

import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'functionalities-page',
  templateUrl: 'functionalities.html'
})
export class FunctionalitiesPage {
  items: Array<{title: string, note?: string, component: any}>;

  constructor(
    public nav: NavController,
    public translate: TranslateService
  ) {
  }

  ionViewWillEnter(){
    Observable.forkJoin(
      this.translate.get('CONTACT_CARD'),
      this.translate.get('VIDEO_PLAYLIST'),
    ).subscribe(data => {
      this.items = [
        { title: data[0], component: ContactCardPage },
        { title: data[1], component: VideoPlaylistPage },
      ];
    });
  }

  itemTapped(event, item) {
    this.nav.push(item.component);
  }

}
