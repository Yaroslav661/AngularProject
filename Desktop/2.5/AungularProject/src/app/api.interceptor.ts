import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const modifiedUrl = request.url + '/1'; 
    const modifiedRequest = request.clone({ url: modifiedUrl });
      
    console.log('Modified request URL:', modifiedUrl);
    return next.handle(modifiedRequest);
  }
}
