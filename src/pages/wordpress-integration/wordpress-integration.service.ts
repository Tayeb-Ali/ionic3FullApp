import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class WordpressService {
  constructor(
    public http: Http,
    public nativeStorage: NativeStorage
  ){}

  getRecentPosts(categoryId:number, page:number = 1){
    //if we want to query posts by category
    let category_url = categoryId? ("&categories=" + categoryId): "";

    return this.http.get(
      environment.wordpress_rest_api_url
      + 'posts?_embed&orderby=modified&page=' + page
      + category_url)
    .map(res => res);
  }

  getCustomPages(){
    return this.http.get(
      environment.wordpress_rest_api_url + 'pages')
    .map(res => res.json());
  }

  getCustomPage(pageId){
    return this.http.get(
      environment.wordpress_rest_api_url + 'pages/' + pageId)
    .map(res => res.json());
  }

  getCategories(){
    return this.http.get(
      environment.wordpress_rest_api_url + 'categories')
    .map(res => res.json());
  }

  getComments(postId:number, page:number = 1){
    return this.http.get(
      environment.wordpress_rest_api_url
      + "comments?post=" + postId
      + '&page=' + page)
    .map(res => res);
  }

  getAuthor(author){
    return this.http.get(environment.wordpress_rest_api_url + "users/" + author)
    .map(res => res.json());
  }

  getPostCategories(post){
    let observableBatch = [];

    post.categories.forEach(category => {
      observableBatch.push(this.getCategory(category));
    });

    return Observable.forkJoin(observableBatch);
  }

  getCategory(category){
    return this.http.get(environment.wordpress_rest_api_url + "categories/" + category)
    .map(res => res.json());
  }

  createComment(postId, user, comment){
    let header: Headers = new Headers();
    header.append('Authorization', 'Bearer ' + user.token);

    return this.http.post(environment.wordpress_rest_api_url + "comments?token=" + user.token, {
      author_name: user.displayname,
      author_email: user.email,
      post: postId,
      content: comment
    },{ headers: header })
    .map(res => res.json());
  }

  getUser(){
    return this.nativeStorage.getItem('ion2fullapp_wordpress_user');
  }

  setUser(user){
    return this.nativeStorage.setItem('ion2fullapp_wordpress_user', user);
  }

  logOut(){
    return this.nativeStorage.remove('ion2fullapp_wordpress_user');
  }

  doLogin(username, password){
    return this.http.post(environment.wordpress_url + 'wp-json/jwt-auth/v1/token',{
      username: username,
      password: password
    })
  }

  validateAuthToken(token){
    let header : Headers = new Headers();
    header.append('Authorization','Basic ' + token);
    return this.http.post(environment.wordpress_url + 'wp-json/jwt-auth/v1/token/validate?token=' + token,
      {}, {headers: header})
  }
}
