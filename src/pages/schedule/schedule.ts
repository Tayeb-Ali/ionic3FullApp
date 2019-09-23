import { Component } from '@angular/core';
import { NavController, SegmentButton } from 'ionic-angular';
import 'rxjs/Rx';

import { ScheduleModel } from './schedule.model';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'schedule-page',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  segment: string;
  schedule: ScheduleModel = new ScheduleModel();

  constructor(
    public nav: NavController,
    public scheduleService: ScheduleService
  ) {
    this.segment = "today";
  }

  ionViewDidLoad() {
    this.scheduleService
      .getData()
      .then(data => {
        this.schedule.today = data.today;
        this.schedule.upcoming = data.upcoming;
      });
  }

  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }

}
