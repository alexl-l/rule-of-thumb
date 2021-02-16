import { Injectable } from '@angular/core';
import { RuleOfThumb } from '@models/config/rule-of-thumb.config';

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
  constructor() {}

  /**
   * @description This function sorts the elements by their position.
   * @param {RuleOfThumb} data
   * @return {*}  {RuleOfThumb}
   * @memberof NavbarService
   */
  public configureData(data: RuleOfThumb): RuleOfThumb {
    data.config.navbar.items.sort((a, b) => (a.position > b.position ? 1 : -1));
    return data;
  }
}
