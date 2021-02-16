import { Component, Input, OnInit } from '@angular/core';
import { Rulings } from '@models/config/rule-of-thumb.config';
import { PreviousRulingsAttributes } from '@models/rest/previous-rulings';

@Component({
  selector: 'zemoga-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
})
export class VotesComponent implements OnInit {
  @Input() data: PreviousRulingsAttributes;
  @Input() parametricData: Rulings;

  constructor() {
    this.data = { id: 0, description: '', detail: { career: '', time: '' }, name: '', daysLeft: 0, overview: '', link: '', picture: '', votes: { dislike: 0, like: 0, myVote: 2 } };
    this.parametricData = { alert: { description: '', subtitle: '', title: '' }, title: '', votes: { icon: '', question: '', title: '', detailClose: '', detailLink: '', time: '' } };
  }

  ngOnInit(): void {}
}
