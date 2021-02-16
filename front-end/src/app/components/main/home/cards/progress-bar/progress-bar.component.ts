import { Component, Input, OnInit } from '@angular/core';
import { Votes } from '@models/rest/previous-rulings';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 22:19:18
// =======================================================================================
// Version    Description
// [1.0.0]    Component to calculate the percentage and display a progress bar
// =======================================================================================

@Component({
  selector: 'zemoga-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  public dislike: number;
  public like: number;
  @Input() data: Votes;

  constructor() {
    this.data = { dislike: 0, like: 0 };
    this.like = 0;
    this.dislike = 0;
  }

  ngOnInit(): void {
    this.calculateAverage();
  }

  /**
   * @description This function calculates the percentage of likes and dislikes
   * @private
   * @memberof ProgressBarComponent
   */
  private calculateAverage(): void {
    this.dislike = Math.ceil((this.data.dislike * 100) / (this.data.dislike + this.data.like));
    this.like = Math.ceil((this.data.like * 100) / (this.data.dislike + this.data.like));
  }
}
