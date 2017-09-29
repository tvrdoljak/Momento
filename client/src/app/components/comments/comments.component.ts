import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {CardService} from '../../../services/card.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: string;

  constructor(@Inject(MD_DIALOG_DATA) public data: any, private cardService: CardService) {
  }

  onSubmit() {
    console.log(this.data);
    console.log(this.comment);
    if (this.comment !== '') {
      this.data.comments.push(this.comment);
      this.cardService.updateComments(this.data).subscribe(res => console.log(res), err => console.log(err));
      this.comment = "";
    }
  }


  ngOnInit() {
  }

}
