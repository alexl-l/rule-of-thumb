import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantService } from '@services/constant.service';
import { RuleOfThumb } from '@models/config/rule-of-thumb.config';
import { HandleErrorService } from './handle-error.service';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 06:22:26
// =======================================================================================
// Version    Description
// [1.0.0]    Class that returns observables for consumption of properties
// =======================================================================================

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private httpClient: HttpClient, private constant: ConstantService, private error: HandleErrorService) {}

  /**
   * @description Observable to consume the rule of thumb file.
   * @return {*}  {Observable<RuleOfThumb>}
   * @memberof ConfigService
   */
  public getRuleOfThumbFile$(): Observable<RuleOfThumb> {
    return this.httpClient.get<RuleOfThumb>(this.constant.ASSETS_PATH_SVG + this.constant.RULE_OF__THUMB_FILE);
  }
}
