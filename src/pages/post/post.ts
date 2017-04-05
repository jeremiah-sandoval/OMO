import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BlogPost } from '../../models/blogpost';

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
  blogpost: BlogPost;
  id: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private omoPosts: OmoPosts) {
    this.id = navParams.get('id');
    omoPosts.loadContent(this.id).subscribe(blogpost => {
      this.blogpost = blogpost;
      console.log(blogpost.id)
    })
  }

}
