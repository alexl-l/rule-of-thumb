import { Component, OnInit } from '@angular/core';
import { Alert } from '@models/alert/alert';
import { PreviousRulings } from '@models/rest/previous-rulings';
import { RestService } from '@services/rest.service';
import { UtilService } from '@services/util.service';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 22:16:12
// =======================================================================================
// Version    Description
// [1.0.0]    Main component that allows voting and viewing previous results
// =======================================================================================

@Component({
  selector: 'zemoga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public data: PreviousRulings;

  constructor(private rest: RestService, private util: UtilService) {
    this.data = { previousRulings: [] };
  }

  ngOnInit(): void {
    this.getPreviousRulings();
  }

  /**
   * @description This function brings up the list of previous rulings
   * @private
   * @memberof HomeComponent
   */
  private getPreviousRulings(): void {
    this.rest.getPreviousRulings$().subscribe(
      (responsePreviousRulings) => {
        this.data = responsePreviousRulings;
      },
      () => {
        const dataAlert: Alert = { action: 'CLOSE', duration: 3000, horizontalPosition: 'end', verticalPosition: 'top', message: 'Error consulting previous rulings' };
        this.util.openSnackBar(dataAlert);
      }
    );
  }
}
