import { Injectable } from '@angular/core';
import { RuleOfThumb, Navbar } from '@models/config/rule-of-thumb.config';
import { ConfigService } from '@services/config.service';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 07:53:26
// =======================================================================================
// Version    Description
// [1.0.0]    This class has the logic of the component
// =======================================================================================
@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  public data: Navbar;

  constructor(private cnf: ConfigService) {
    this.data = { brand: { position: 0, routing: '', text: '' }, items: [] };
    this.getConFigFile();
  }

  /**
   * @description This function consumes the properties file
   * @private
   * @return {*}  {BehaviorSubject<RuleOfThumb>}
   * @memberof NavbarService
   */
  private getConFigFile(): void {
    this.cnf.getRuleOfThumbFile$().subscribe((responseConfig) => {
      if (responseConfig.config.navbar) {
        this.data = this.configureData(responseConfig).config.navbar;
      }
    });
  }

  /**
   * @description This function sorts the elements by their position.
   * @private
   * @param {RuleOfThumb} data
   * @return {*}  {RuleOfThumb}
   * @memberof NavbarService
   */
  private configureData(data: RuleOfThumb): RuleOfThumb {
    data.config.navbar.items.sort((a, b) => (a.position > b.position ? 1 : -1));
    return data;
  }
}
