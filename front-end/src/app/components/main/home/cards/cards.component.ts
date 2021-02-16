import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PreviousRulingsAttributes } from '@models/rest/previous-rulings';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 22:19:18
// =======================================================================================
// Version    Description
// [1.0.0]    Card component with the description of past results
// =======================================================================================

@Component({
  selector: 'zemoga-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnChanges {
  @Input() data: PreviousRulingsAttributes;
  @Output() changeValue = new EventEmitter<PreviousRulingsAttributes>();
  public likeOrDislike: boolean;

  constructor() {
    this.likeOrDislike = false;
    this.data = { _id: 0, description: '', detail: { career: '', time: 0 }, name: '', daysLeft: 0, overview: '', link: '', picture: '', votes: { dislike: 0, like: 0 } };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this.likeOrDislike = this.data.votes.like >= this.data.votes.dislike;
    }
  }

  /**
   * @description This function issues the information to vote.
   * @memberof CardsComponent
   */
  public emitEvent(): void {
    this.changeValue.emit(this.data);
  }
}
