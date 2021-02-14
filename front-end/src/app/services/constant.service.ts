import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Alert } from '@models/alert/alert';

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
  public ASSETS_PATH_CONFIG = environment.assetsPathConfig;
  public RULE_OF_THUMB_FILE = environment.ruleOfThumb;
  public PREVIOUS_RULINGS = environment.previousRulings;

  public DEFAULT_ERROR_MODAL: Alert = {
    duration: 3000,
    action: 'CLOSE',
    horizontalPosition: 'end',
    verticalPosition: 'top',
    message: 'Error getting the data',
  };

  constructor() { }
}
