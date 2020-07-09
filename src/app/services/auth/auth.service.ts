import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import Swal from "sweetalert2";

import { Login } from "../../model/login.model";
import { Register } from "src/app/model/register.model";

import { environment } from "../../../environments/environment";

const URL_SERVICIOS = environment.URL_SERVICIOS;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLogged: boolean = false;
  token: string;

  constructor(private http: HttpClient, private router: Router) {
    this.getStorage();
  }

  //--------------LOCAL STORAGE---------------------
  saveStorage(token: string) {
    localStorage.setItem("token", token);
    this.token = token;
    console.log("token", token);
  }

  getStorage() {
    if (localStorage.getItem("token")) {
      this.isLogged = true;
      this.token = localStorage.getItem("token");
    } else {
      this.isLogged = false;
      this.token = "";
    }
  }
  //--------------LOGIN---------------------

  isLoggedIn() {
    return this.isLogged;
  }

  login(login: Login) {
    let url = `${URL_SERVICIOS}/auth/login`;
    return this.http.post(url, login).pipe(
      map((resp: any) => {
        this.isLogged = true;
        this.saveStorage(resp.accessToken);
        return true;
      }),
      catchError((err) => {
        Swal.fire("Error en el login", err.error.message, "error");
        throw err;
      })
    );
  }

  register(register: Register) {
    let url = `${URL_SERVICIOS}/auth/register`;
    return this.http.post(url, register).pipe(
      map((resp: any) => {
        Swal.fire(
          "Creaste tu Cuenta",
          `${resp.message}, ahora puedes loguearte con tus credenciales`,
          "success"
        );
        return true;
      }),
      catchError((err) => {
        Swal.fire("Error en el registro", err.error.message, "error");
        throw err;
      })
    );
  }

  logout() {
    this.isLogged = false;
    this.token = "";
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}
