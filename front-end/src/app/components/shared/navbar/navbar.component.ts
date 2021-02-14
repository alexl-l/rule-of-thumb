import { Component, OnInit } from '@angular/core';
import { Alert } from '@models/alert/alert';
import { Navbar } from '@models/config/rule-of-thumb.config';
import { ConfigService } from '@services/config.service';
import { UtilService } from '@services/util.service';
import { NavbarService } from './navbar.service';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 05:28:34
// =======================================================================================
// Version    Description
// [1.0.0]    Navbar for component navigation.
// =======================================================================================

@Component({
  selector: 'zemoga-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public data: Navbar;
  public showForm: boolean;

  constructor(private srv: NavbarService, private cnf: ConfigService, private util: UtilService) {
    this.data = { brand: { position: 0, routing: '', text: '' }, items: [], search: { icon: '' } };
    this.showForm = false;
  }

  /**
   * @description OnInti. Life cycle of angular.
   * @memberof NavbarComponent
   */
  public ngOnInit(): void {
    this.getConFigFile();
  }

  /**
   * @description This function consumes the properties file
   * @private
   * @return {*}  {BehaviorSubject<RuleOfThumb>}
   * @memberof NavbarService
   */
  private getConFigFile(): void {
    this.cnf.getRuleOfThumbFile$().subscribe(
      (responseConfig) => {
        if (responseConfig.config.navbar.brand && responseConfig.config.navbar.items) {
          this.data = this.srv.configureData(responseConfig).config.navbar;
        } else {
          this.util.openSnackBar();
        }
      },
      () => {
        this.util.openSnackBar();
      }
    );
  }
}
