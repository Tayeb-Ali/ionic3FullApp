import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/Rx';

import { NotificationsModel } from './notifications.model';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'notifications-page',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  notifications: NotificationsModel = new NotificationsModel();

  constructor(
    public nav: NavController,
    public notificationsService: NotificationsService
  ) {
  }

  ionViewDidLoad() {
    this.notificationsService
      .getData()
      .then(data => {
        this.notifications.today = data.today;
        this.notifications.yesterday = data.yesterday;
      });
  }
}
