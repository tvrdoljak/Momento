import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FollowingService {
  readonly followingURL = 'http://localhost:3000/api/following';

  constructor(private http: Http) {
  }

  getFollowings() {
    return this.http
      .get(this.followingURL)
      .map(res => res.json());
  }


}
