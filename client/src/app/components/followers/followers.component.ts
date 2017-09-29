import { Component, OnInit } from '@angular/core';
import {FollowersService} from '../../../services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  allFollowers: any[];

  constructor(private followersService: FollowersService) { }

  ngOnInit() {
    this.followersService.getFollowers().subscribe(
      res => this.allFollowers = res,
      err => console.log(err,
      () => console.log('done'))
    );
  }

}
