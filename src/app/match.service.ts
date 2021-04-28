import { Injectable } from '@angular/core';
import { Card } from './card';
import { CardMatchCheck } from './card-match-check';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor() {}

  matches!: CardMatchCheck;

  checkMatch(cards: Card[]) {
    if (
      cards[0].count === cards[1].count &&
      cards[1].count === cards[2].count
    ) {
      this.matches.count = true;
    } else if (
      cards[0].count !== cards[1].count &&
      cards[1].count !== cards[2].count &&
      cards[2].count !== cards[0].count
    ) {
      this.matches.count = true;
    } else this.matches.count = false;

    if (
      cards[0].color === cards[1].color &&
      cards[1].color === cards[2].color
    ) {
      this.matches.color = true;
    } else if (
      cards[0].color !== cards[1].color &&
      cards[1].color !== cards[2].color &&
      cards[2].color !== cards[0].color
    ) {
      this.matches.color = true;
    } else this.matches.color = false;

    if (
      cards[0].shape === cards[1].shape &&
      cards[1].shape === cards[2].shape
    ) {
      this.matches.shape = true;
    } else if (
      cards[0].shape !== cards[1].shape &&
      cards[1].shape !== cards[2].shape &&
      cards[2].shape !== cards[0].shape
    ) {
      this.matches.shape = true;
    } else this.matches.shape = false;

    if (
      cards[0].shade === cards[1].shade &&
      cards[1].shade === cards[2].shade
    ) {
      this.matches.shade = true;
    } else if (
      cards[0].shade !== cards[1].shade &&
      cards[1].shade !== cards[2].shade &&
      cards[2].shade !== cards[0].shade
    ) {
      this.matches.shade = true;
    } else this.matches.shade = false;

    if (
      this.matches.count === true &&
      this.matches.color === true &&
      this.matches.shape === true &&
      this.matches.shade === true
    )
      console.log("It's a match!");
    else console.log('No match: ' + this.matches);
  }
}
