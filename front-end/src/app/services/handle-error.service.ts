import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 06:29:15
// =======================================================================================
// Version    Description
// [1.0.0]    Class for handling errors in the consumption of services
// =======================================================================================

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService implements HttpInterceptor {
  constructor() {}

  /**
   * @description This function allows you to control the error code and message.
   * @private
   * @param {HttpErrorResponse} error
   * @return {*}  {Observable<string>}
   * @memberof HandleErrorService
   */
  private handleError$(error: HttpErrorResponse): Observable<string> {
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : '418 - I am a teapot';
    return throwError(errMsg);
  }

  /**
   * @description This feature allows you to capture all errors and centralize them.
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @return {*}  {Observable<HttpEvent<any>>}
   * @memberof HandleErrorService
   */
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((tokenError: HttpErrorResponse) => {
        this.handleError$(tokenError);
        return throwError(tokenError);
      })
    );
  }
}
