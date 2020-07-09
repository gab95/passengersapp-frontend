import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //get the token from the request
    const token = this._authService.token;

    //clone the token for security and avoid problems editing the token
    const authRequest = req.clone({
      //set() -> for add a new header
      headers: req.headers.set("x-access-token", `${token}`),
    });
    return next.handle(authRequest);
  }
}
