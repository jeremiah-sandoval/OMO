import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Post } from '../../models/post';

import { OmoPosts } from '../../providers/omo-posts';

import { PostPage } from '../post/post';
/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  posts: Post[]

  constructor(public navCtrl: NavController, private omoPosts: OmoPosts) {
    omoPosts.load().subscribe(posts => {
      this.posts = posts;
    })
  }

  goToPost(id: number) {
    this.navCtrl.push(PostPage, {id});
  }

}
