import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alert } from '@models/alert/alert';
import { Rulings } from '@models/config/rule-of-thumb.config';
import { PreviousRulingsAttributes, RulingDataPut } from '@models/rest/previous-rulings';
import { RestService } from '@services/rest.service';
import { UtilService } from '@services/util.service';

@Component({
  selector: 'zemoga-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss'],
})
export class VotesComponent implements OnInit {
  @Input() data: PreviousRulingsAttributes;
  @Input() parametricData: Rulings;
  @Output() changeValue = new EventEmitter<RulingDataPut>();

  constructor(private rest: RestService, private util: UtilService) {
    this.data = { _id: 0, description: '', detail: { career: '', time: 0 }, name: '', daysLeft: 0, overview: '', link: '', picture: '', votes: { dislike: 0, like: 0 } };
    this.parametricData = { alert: { description: '', subtitle: '', title: '' }, title: '', votes: { icon: '', question: '', title: '', detailClose: '', detailLink: '', time: '' } };
  }

  ngOnInit(): void {}

  public vote(like: boolean): void {
    if (like) {
      this.data.votes.like++;
    } else {
      this.data.votes.dislike++;
    }
    this.rest.putVotesRulings$(this.data).subscribe(
      (responseData) => {
        const dataAlert: Alert = { action: 'Nice', duration: 3000, horizontalPosition: 'center', verticalPosition: 'bottom', message: 'Your vote has been successfully saved' };
        if (responseData.success) {
          this.util.openSnackBar(dataAlert);
          this.changeValue.emit(responseData);
        }
      },
      (errorUpdate) => {
        const dataAlert: Alert = { action: 'CLOSE', duration: 3000, horizontalPosition: 'end', verticalPosition: 'top', message: 'Error saving your vote' };
        this.util.openSnackBar(dataAlert);
      }
    );
  }
}
