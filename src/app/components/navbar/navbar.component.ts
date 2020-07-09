import { Component, OnInit } from "@angular/core";

import { AuthService } from "src/app/services/service.index";
import { Passenger } from "../../model/passenger.model";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  passenger: Passenger;

  constructor(public _authService: AuthService) {}

  ngOnInit() {
    this.passenger = JSON.parse(
      atob(this._authService.token.split(".")[1])
    ).passengerLogin;
  }
}
