import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import Swal from "sweetalert2";
import { AuthService } from "../auth/auth.service";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class LoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this._authService.isLoggedIn()) {
      return true;
    } else {
      Swal.fire(
        "Acción no permitida",
        "Debe ingresar con sus credenciales para poder usar el sistema",
        "error"
      );
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
