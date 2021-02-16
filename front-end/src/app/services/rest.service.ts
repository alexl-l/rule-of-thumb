import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreviousRulings } from '@models/rest/previous-rulings';
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
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient, private cnt: ConstantService) { }

  public getPreviousRulings$(): Observable<PreviousRulings> {
    return this.httpClient.get<PreviousRulings>(this.cnt.BASE_URL + this.cnt.PREVIOUS_RULINGS);
  }
}
