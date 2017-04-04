import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Post } from '../models/post';

/*
  Generated class for the OmoPosts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OmoPosts {
  omoApiUrl = 'http://devel2.ordermate.online/wp-json/wp/v2';

  constructor(public http: Http) {
    console.log('Hello OmoPosts Provider');
  }

  load(): Observable<Post[]> {
    return this.http.get(`${this.omoApiUrl}/posts`)
      .map(res => <Post[]>res.json());
  }

  loadContent(id: number): Observable<Post> {
    return this.http.get(`${this.omoApiUrl}/posts/${id}`)
      .map(res => <Post>res.json());
  }

}
