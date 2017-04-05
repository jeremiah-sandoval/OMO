import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BlogPost } from '../../models/blogpost';

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
  blogposts: BlogPost[]

  constructor(public navCtrl: NavController, private omoPosts: OmoPosts) {
    omoPosts.load().subscribe(blogposts => {
      this.blogposts = blogposts;
    })
  }

  goToBlogPost(id: string) {
    this.navCtrl.push(PostPage, {id});
  }

}
