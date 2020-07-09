import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { Passenger } from "../../model/passenger.model";

import { map, catchError } from "rxjs/operators";

import Swal from "sweetalert2";

import { environment } from "../../../environments/environment";

const URL_SERVICIOS = environment.URL_SERVICIOS;

@Injectable({
  providedIn: "root",
})
export class PassengerService {
  passenger: Passenger;
  token: string;

  constructor(private http: HttpClient, private router: Router) {}

  getPassengerInfo() {
    let url = `${URL_SERVICIOS}/passenger/info`;
    return this.http.get(url);
  }

  getPassengerPayments() {
    let url = `${URL_SERVICIOS}/passenger/payments`;
    return this.http.get(url);
  }

  getPassengerTopUps() {
    let url = `${URL_SERVICIOS}/passenger/topups`;
    return this.http.get(url);
  }

  editPassengerLoginAndPassword(passenger: Passenger) {
    let url = `${URL_SERVICIOS}/passenger/edit`;
    return this.http.put(url, passenger).pipe(
      map((resp: any) => {
        // console.log("usser", resp);
        Swal.fire(`Datos Actualizados`, resp.message, "success");
        return true;
      }),
      catchError((err) => {
        // console.log("usser", err);
        Swal.fire("Error en el Formulario", err.error.message, "error");
        throw err;
      })
    );
  }
}
