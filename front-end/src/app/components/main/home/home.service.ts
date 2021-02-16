import { Injectable } from '@angular/core';
import { PreviousRulings, PreviousRulingsAttributes } from '@models/rest/previous-rulings';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-16 10:24:32
// =======================================================================================
// Version    Description
// [1.0.0]    Service that controls logic to transform the data returned by the back-end
// =======================================================================================

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  /**
   * @description This function configures the response of the service with what the front needs
   * @param {PreviousRulingsAttributes[]} data
   * @return {*}  {PreviousRulings}
   * @memberof HomeService
   */
  public configData(data: PreviousRulingsAttributes[]): PreviousRulings {
    const currentData: PreviousRulings = { previousRulings: [], currentRulings: [] };
    currentData.currentRulings.push(data[0]);
    data.splice(0, 1);
    data.forEach((element) => {
      currentData.previousRulings.push(element);
    });
    currentData.currentRulings = this.calculateTime(currentData.currentRulings);
    currentData.previousRulings = this.calculateTime(currentData.previousRulings);
    return currentData;
  }

  /**
   * @description This function changes the value for which you want to vote
   * @param {PreviousRulingsAttributes} event
   * @param {PreviousRulings} data
   * @return {*}  {PreviousRulingsAttributes[]}
   * @memberof HomeService
   */
  public changeData(event: PreviousRulingsAttributes, data: PreviousRulings): PreviousRulingsAttributes[] {
    const index = data.previousRulings
      .map((item) => {
        return item._id;
      })
      .indexOf(event._id);
    data.previousRulings.splice(index, 1);
    data.previousRulings.unshift(data.currentRulings[0]);
    return data.previousRulings;
  }

  /**
   * @description This function calculates the different dates.
   * @private
   * @param {PreviousRulingsAttributes[]} array
   * @return {*}  {PreviousRulingsAttributes[]}
   * @memberof HomeService
   */
  private calculateTime(array: PreviousRulingsAttributes[]): PreviousRulingsAttributes[] {
    array.forEach((element) => {
      const date = new Date(element.daysLeft);
      const now = new Date();
      element.daysLeft = Math.trunc((now.getTime() - date.getTime()) / (24 * 3600 * 1000));
      element.detail.time = now.getMonth() + 12 * now.getFullYear() - (date.getMonth() + 12 * date.getFullYear());
    });
    return array;
  }
}
