import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class TokenVerifyGuard implements CanActivate {
  constructor(public _authService: AuthService) {}

  canActivate(): Promise<boolean> | boolean {
    console.log("inicio de verificatoken");
    let token = this._authService.token;

    if (!token) {
      Swal.fire(
        "Acción no permitida",
        "Debe ingresar con sus credenciales para poder usar el sistema",
        "error"
      );
      this._authService.logout();
    }

    //decodificamos el token
    let payload = JSON.parse(atob(token.split(".")[1]));
    console.log("payload de token verify", payload);
    
    if (!payload) {
      Swal.fire(
        "Token no válido",
        "Debe ingresar con sus credenciales para poder usar el sistema",
        "error"
      );
      this._authService.logout();
    }

    let expirado = this.expirado(payload.exp);

    if (expirado) {
      //el usuario no puede entrar a la pagina si el token esta expirado
      Swal.fire(
        "Token Expirado",
        "El token generado expiró, debe ingresar al sistema nuevamente para generar uno nuevo",
        "error"
      );
      this._authService.logout();
      return false;
    } else {
      return true;
    }
  }

  expirado(fechaExp: number) {
    let ahora = new Date().getTime() / 1000;
    if (fechaExp < ahora) {
      //expiro
      return true;
    } else {
      //no expiro
      return false;
    }
  }
}
