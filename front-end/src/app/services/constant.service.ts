import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 06:22:19
// =======================================================================================
// Version    Description
// [1.0.0]    Class with application global constants
// =======================================================================================

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  public BASE_URL = environment.baseURL;
  public ASSETS_PATH_SVG = environment.assetsPathSVG;
  public RULE_OF__THUMB_FILE = environment.ruleOfThumb;

  constructor() { }
}
