import { Component } from '@angular/core';
import { NavParams, NavController, LoadingController, AlertController } from 'ionic-angular';
import { BlogFeedPage } from '../blog-feed/blog-feed';
import { BlogPostModel } from '../blog-post.model';
import { WordpressLoginPage } from '../wordpress-login/wordpress-login';
import { WordpressService } from '../wordpress-integration.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'page-blog-post',
  templateUrl: 'blog-post.html'
})
export class BlogPostPage {

  post: BlogPostModel = new BlogPostModel();
  current_comments_page = 1;
  loggedUser: boolean = false;
  content_ready:boolean = false;
  morePagesAvailable:boolean = true;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public wordpressService: WordpressService
  ) {}

  ngOnInit() {
    this.post = this.navParams.get('post');
    this.wordpressService.getUser()
    .then(
      data => this.loggedUser = true,
      error => this.loggedUser = false
    );

    Observable.forkJoin(
      this.getAuthorData(),
      this.getCategories(),
      this.getComments())
      .subscribe(data => {
        this.post.author_details = data[0];
        this.post.categories_list = data[1];
        this.post.comments = data[2].json();
        this.post.comments_count = Number(data[2].headers.get('x-wp-total'));
        this.post.comments_pages = Number(data[2].headers.get('x-wp-totalpages'));
        this.content_ready = true;
      });
  }

  getAuthorData(){
    return this.wordpressService.getAuthor(this.post.author);
  }

  getCategories(){
    return this.wordpressService.getPostCategories(this.post);
  }

  getComments(){
    return this.wordpressService.getComments(this.post.id);
  }

  loadMoreComments(infiniteScroll) {
    this.morePagesAvailable = this.post.comments_pages > this.current_comments_page;
    if(this.morePagesAvailable)
    {
      this.current_comments_page +=1;

      this.wordpressService.getComments(this.post.id, this.current_comments_page)
      .subscribe(data => {
        for(let item of data.json()){
          this.post.comments.push(item);
        }
        infiniteScroll.complete();
      }, err => {
        console.log(err);
      })
    }
  }

  goToCategoryPosts(categoryId, categoryTitle){
    this.navCtrl.push(BlogFeedPage, {
      id: categoryId,
      title: categoryTitle
    })
  }

  createComment(){
    let user: any;

    this.wordpressService.getUser()
    .then(res => {
      user = res;

      let alert = this.alertCtrl.create({
      title: 'Add a comment',
      inputs: [
        {
          name: 'comment',
          placeholder: 'Comment'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accept',
          handler: data => {
            let loading = this.loadingCtrl.create();
            loading.present();
            this.wordpressService.createComment(this.post.id, user, data.comment)
            .subscribe(
              (data) => {
                console.log("ok", data);
                this.getComments();
                loading.dismiss();
              },
              (err) => {
                console.log("err", err);
                loading.dismiss();
              }
            );
          }
        }
      ]
    });
    alert.present();
    },
    err => {
      //ask the user to login
      let alert = this.alertCtrl.create({
        title: 'Please login',
        message: 'You need to login in order to comment',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Login',
            handler: () => {
              this.navCtrl.push(WordpressLoginPage);
            }
          }
        ],
        cssClass: 'comment-alert'
      });
    alert.present();
    });
  }

  logOut(){
    this.wordpressService.logOut()
    .then(
      res => this.navCtrl.push(WordpressLoginPage),
      err => console.log('Error in log out')
    )
  }

  goToLogin(){
    this.navCtrl.push(WordpressLoginPage);
  }


}
