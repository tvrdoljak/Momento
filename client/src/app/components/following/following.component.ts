import { Component, OnInit } from '@angular/core';
import {FollowingService} from '../../../services/following.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  allFollowings: any[];

  constructor(private followingService: FollowingService) { }

  ngOnInit() {
    this.followingService.getFollowings().subscribe(
      res => this.allFollowings = res,
      err => console.log(err,
      () => console.log('done'))
    );
  }

}
