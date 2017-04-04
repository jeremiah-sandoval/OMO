import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Post } from '../../models/post';
import { OmoPosts } from '../../providers/omo-posts';
/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
  post: Post;
  id: number;

  constructor(public navCtrl: NavController, private navParams: NavParams, private omoPosts: OmoPosts) {
    this.id = navParams.get('id');
    omoPosts.loadContent(this.id).subscribe(post => {
      this.post = post;
    })
  }

}
