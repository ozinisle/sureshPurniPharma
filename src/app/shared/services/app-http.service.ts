import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';
import { AppErrorHandlerService } from './app-error-handler.service';
@Injectable()
export class AppHttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient, private appErrorHandler: AppErrorHandlerService) { }

  /**
   * @description: helps facilitate basic http get request calls
   * @param url
   */
  get(targetUrl: string, httpOptions?: any): Observable<any> {
    if (!httpOptions) {
      httpOptions = this.httpOptions;
    }

    return this.http.get(targetUrl, httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.appErrorHandler.handleError) // then handle the error
    );
  }

  /**
   *
   * @param targetUrl
   * @param requestData
   * @param httpOptions
   */
  post(targetUrl: string, requestData: any, httpOptions?: any): Observable<any> {
    if (!httpOptions) {
      httpOptions = this.httpOptions;
    }

    return this.http.post<any>(targetUrl, requestData, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.appErrorHandler.handleError)// then handle the error
      );
  }

  /**
   *
   * @param targetUrl
   * @param id
   * @param httpOptions
   */
  delete(targetUrl: string, id: number, httpOptions?: any): Observable<{}> {
    if (!httpOptions) {
      httpOptions = this.httpOptions;
    }

    const url = `${targetUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.appErrorHandler.handleError)
      );
  }

}
