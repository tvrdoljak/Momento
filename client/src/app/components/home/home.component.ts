import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {CommentsComponent} from '../comments/comments.component';
import {CardService} from '../../../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCards: any;
  constructor(public dialog: MdDialog, private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCards().subscribe(
      res => this.allCards = res,
      err => console.log(err),
      () => console.log('this.allCard -> ', this.allCards)
    );
  }

  openDialog(cardNumber: number): void {
    const dialogRef = this.dialog.open(CommentsComponent, {
      data: this.allCards[cardNumber]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }




}
