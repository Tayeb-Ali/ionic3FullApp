import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { VideoPlaylistModel } from './video-playlist.model';

import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'video-playlist-page',
  templateUrl: 'video-playlist.html',
})
export class VideoPlaylistPage {
  loading: any;
	start_playing: boolean = false;
  api: VgAPI;
  video_playlist_model: VideoPlaylistModel = new VideoPlaylistModel();

  constructor(
    public nav: NavController,
    public loadingCtrl: LoadingController,
    public socialSharing: SocialSharing
  ) {

  }

	createLoader(){
		this.loading = this.loadingCtrl.create();
	}

	presentLoader(){
		// Check if the current instance is usable
		if (this.loading === undefined || (this.loading !== undefined && this.loading.instance === null)){
			// If it's not usable, then create a new one
			this.createLoader();
		}

		this.loading.present();
	}

	dismissLoader(){
		// Check if the current instance is usable
		if (this.loading !== undefined){
			// If it's not usable, then create a new one
			this.loading.dismiss();
		}
	}

	playMedia(media) {
    // Check if this media is not the same we are currently playing
    if(media !== this.video_playlist_model.selected_video)
    {
      this.presentLoader();
  		// Change sources
  		this.video_playlist_model.selected_video = media;
  		// When changing sources we wait until the metadata is loaded and then we start playing the video
    }
	}

	onPlayerReady(api: VgAPI) {
    this.api = api;
		this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
	}

  playVideo() {
		if(this.start_playing)
		{
			this.dismissLoader();
	    this.api.play();
		}
		else
		{
			this.start_playing = true;
		}
  }

  shareVideo() {
  let current_video = this.video_playlist_model.selected_video;
   //this code is to use the social sharing plugin
   // message, subject, file, url
   this.socialSharing.share(current_video.description, current_video.title, current_video.thumbnail, null)
   .then(() => {
     console.log('Success!');
   })
   .catch(() => {
      console.log('Error');
   });
  }

}
