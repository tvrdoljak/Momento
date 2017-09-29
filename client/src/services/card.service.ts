import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CardService {
  readonly cardsURL = 'http://localhost:3000/api/card';

  constructor(private http: Http) {
  }

  getCards() {
    return this.http
      .get(this.cardsURL)
      .map(res => res.json());
  }

  updateComments(card: any) {
    const options = new Headers();
    options.append('Content-Type', 'application/json');
    return this.http
      .put(this.cardsURL + '/' + card._id, card, options)
      .map(res => res.json());
  }

}
