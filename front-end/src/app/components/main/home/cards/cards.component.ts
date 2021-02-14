import { Component, Input, OnInit } from '@angular/core';
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
export class CardsComponent implements OnInit {
  @Input() data: PreviousRulingsAttributes;

  constructor() {
    this.data = { description: '', detail: { career: '', time: '' }, name: '', picture: '', votes: { dislike: 0, like: 0, myVote: 2 } };
  }

  ngOnInit(): void {}
}
