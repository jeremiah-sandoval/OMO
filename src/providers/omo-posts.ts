import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { BlogPost } from '../models/blogpost';

/*
  Generated class for the OmoPosts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OmoPosts {
  omoApiUrl = 'http://devel2.ordermate.online/wp-json/wp/v2';

  constructor(public http: Http) {}

  load(): Observable<BlogPost[]> {
    return this.http.get(`${this.omoApiUrl}/posts`)
      .map(res => <BlogPost[]>res.json());
  }

  loadContent(id: string): Observable<BlogPost> {
    return this.http.get(`${this.omoApiUrl}/posts/${id}`)
      .map(res => <BlogPost>(res.json()));
  }

}
