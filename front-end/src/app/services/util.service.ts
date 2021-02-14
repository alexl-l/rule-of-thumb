import { Injectable } from '@angular/core';
import { Alert } from '@models/alert/alert';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConstantService } from './constant.service';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 22:16:59
// =======================================================================================
// Version    Description
// [1.0.0]    Service with utility functions
// =======================================================================================

@Injectable({
  providedIn: 'root',
})
export class UtilService {

  constructor(private alert: MatSnackBar, private cnt: ConstantService) {}

  /**
   * @description This function opens an alert.
   * @param {Alert} dataAlert
   * @memberof UtilService
   */
  public openSnackBar(dataAlert: Alert = this.cnt.DEFAULT_ERROR_MODAL): void {
    this.alert.open(dataAlert.message, dataAlert.action, {
      duration: dataAlert.duration,
      horizontalPosition: dataAlert.horizontalPosition as MatSnackBarHorizontalPosition,
      verticalPosition: dataAlert.verticalPosition as MatSnackBarVerticalPosition,
    });
  }
}
