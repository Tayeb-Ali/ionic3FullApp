import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/Rx';

import { List2Model } from './list-2.model';
import { List2Service } from './list-2.service';

@Component({
  selector: 'list-2-page',
  templateUrl: 'list-2.html'
})
export class List2Page {
  list2: List2Model = new List2Model();

  constructor(
    public nav: NavController,
    public list2Service: List2Service
  ) {
  }

  ionViewDidLoad() {
    this.list2Service
      .getData()
      .then(data => {
        this.list2.items = data.items;
      });
  }

}
