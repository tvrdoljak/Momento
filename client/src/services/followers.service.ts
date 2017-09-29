import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FollowersService {
  readonly followersURL = 'http://localhost:3000/api/followers';

  constructor(private http: Http) {
  }

  getFollowers() {
    return this.http
      .get(this.followersURL)
      .map(res => res.json());
  }


}
