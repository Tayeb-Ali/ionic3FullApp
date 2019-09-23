export class BlogPostModel {
	id: any;
	title: any;
	image: any;
	description: any;
	comments_count: number = 0;
	comments_pages: number = 0;
  author_details: any;
  author: any;
  date: any;
  categories_list: Array<any>;
  comments: Array<any>;
}

export class BlogFeedModel {
  posts: Array<BlogPostModel> = new Array<BlogPostModel>();
  posts_count: number = 0;
	posts_pages: number = 0;
}
