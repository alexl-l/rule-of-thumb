import { Component, OnInit } from '@angular/core';
import { Alert } from '@models/alert/alert';
import { Footer, Rulings } from '@models/config/rule-of-thumb.config';
import { PreviousRulings, PreviousRulingsAttributes } from '@models/rest/previous-rulings';
import { ConfigService } from '@services/config.service';
import { RestService } from '@services/rest.service';
import { UtilService } from '@services/util.service';
import { HomeService } from './home.service';

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
  public parametricData: Rulings;
  public footer: Footer;
  public message: boolean;
  public showSpinner: boolean;

  constructor(private rest: RestService, private util: UtilService, private cnf: ConfigService, private srv: HomeService) {
    this.data = { previousRulings: [], currentRulings: [] };
    this.parametricData = { alert: { description: '', subtitle: '', title: '' }, title: '', votes: { icon: '', question: '', title: '', detailClose: '', detailLink: '', time: '' } };
    this.footer = {button: '', title: ''};
    this.message = true;
    this.showSpinner = true;
  }

  ngOnInit(): void {
    this.getPreviousRulings();
    this.getConFigFile();
  }

  /**
   * @description This function brings up the list of previous rulings
   * @private
   * @memberof HomeComponent
   */
  private getPreviousRulings(): void {
    this.rest.getPreviousRulings$().subscribe(
      (responsePreviousRulings) => {
        if (responsePreviousRulings.success && responsePreviousRulings.data.length > 0) {
          this.data = this.srv.configData(responsePreviousRulings.data);
        }
        this.showSpinner = false;
      },
      () => {
        const dataAlert: Alert = { action: 'CLOSE', duration: 3000, horizontalPosition: 'end', verticalPosition: 'top', message: 'Error consulting previous rulings' };
        this.util.openSnackBar(dataAlert);
        this.showSpinner = false;
      }
    );
  }

  /**
   * @description This function consumes the properties file
   * @private
   * @memberof HomeComponent
   */
  private getConFigFile(): void {
    this.cnf.getRuleOfThumbFile$().subscribe(
      (responseConfig) => {
        if (responseConfig.config.rulings) {
          this.parametricData = responseConfig.config.rulings;
          this.footer =  responseConfig.config.footer;
        } else {
          this.util.openSnackBar();
        }
      },
      () => {
        this.util.openSnackBar();
      }
    );
  }

  /**
   * @description This function hides the alert.
   * @memberof HomeComponent
   */
  public hideAlert(): void {
    this.message = false;
  }

  /**
   * @description This feature changes the current vote
   * @param {PreviousRulingsAttributes} event
   * @memberof HomeComponent
   */
  public changeValue(event: PreviousRulingsAttributes): void {
    this.data.previousRulings = this.srv.changeData(event, this.data);
    this.data.currentRulings[0] = event;
    window.scroll(0, 0);
  }
}
