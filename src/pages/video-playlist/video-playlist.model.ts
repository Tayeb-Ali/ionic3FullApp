export class VideoModel {
	title: string;
	description: string;
	thumbnail: string;
	sources: Array<{src: string, type: string}>;

	constructor (
		title: string,
		description: string,
		thumbnail: string,
		sources: Array<{src: string, type: string}>
	) {
		this.title = title;
		this.description = description;
		this.thumbnail = thumbnail;
		this.sources = sources;
	}
}

export class VideoPlaylistModel {
  selected_video: VideoModel;
  video_playlist: Array<VideoModel> = [];

	constructor () {
		let __video_1 = new VideoModel(
			'Big Buck Bunny',
			'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.',
			'./assets/images/video-playlist/big_buck_bunny.png',
			[
				{
					src: './assets/videos/big_buck_bunny.mp4',
					type: 'video/mp4'
				}
			]
		);
		let __video_2 = new VideoModel(
			'EARTH: Seen From ISS Expedition 28 & 29',
			'Thanks to NASA and the crews of ISS for this wonderful video footage.',
			'./assets/images/video-playlist/earth_seen_from_iss.png',
			[
				{
					src: "http://static.videogular.com/assets/videos/videogular.mp4",
					type: "video/mp4"
				},
				{
					src: "http://static.videogular.com/assets/videos/videogular.ogg",
					type: "video/ogg"
				},
				{
					src: "http://static.videogular.com/assets/videos/videogular.webm",
					type: "video/webm"
				}
			]
		);
		let __video_3 = new VideoModel(
			'Elephant Dream',
			'Elephants Dream is the world\'s first open movie, made entirely with open source graphics software such as Blender, and with all production files freely available to use however you please',
			'./assets/images/video-playlist/elephants_dream.png',
			[
				{
					src: './assets/videos/elephants_dream.mp4',
					type: 'video/mp4'
				}
			]
		);

		this.video_playlist.push(__video_1);
		this.video_playlist.push(__video_2);
		this.video_playlist.push(__video_3);

		this.selected_video = this.video_playlist[0];
	}
}
