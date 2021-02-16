import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreviousRulingsAttributes, RulingData, RulingDataPut } from '@models/rest/previous-rulings';
import { Observable } from 'rxjs';
import { ConstantService } from './constant.service';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 22:17:45
// =======================================================================================
// Version    Description
// [1.0.0]    Service to make the consumption of the rest APIs.
// =======================================================================================

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpClient: HttpClient, private cnt: ConstantService) {}

  /**
   * @description This function does the consumption of the API to fetch the list of rulings
   * @return {*}  {Observable<RulingData>}
   * @memberof RestService
   */
  public getPreviousRulings$(): Observable<RulingData> {
    return this.httpClient.get<RulingData>(this.cnt.BASE_URL + this.cnt.PREVIOUS_RULINGS);
  }

  public putVotesRulings$(data: PreviousRulingsAttributes): Observable<RulingDataPut> {
    return this.httpClient.put<RulingDataPut>(`${this.cnt.BASE_URL}${this.cnt.PREVIOUS_RULINGS}/${data._id}`, {votes: data}.votes);
  }
}
