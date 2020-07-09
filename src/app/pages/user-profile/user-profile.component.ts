import { Component, OnInit } from "@angular/core";
import { PassengerService } from "../../services/passengers/passenger.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Passenger } from "../../model/passenger.model";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  passengerForm: FormGroup;
  passenger: Passenger;

  constructor(
    private _passengerService: PassengerService,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this._passengerService.getPassengerInfo().subscribe((resp: any) => {
      this.passenger = resp.passengerData;

      this.passengerForm = new FormGroup({
        idcard: new FormControl({
          value: this.passenger.idcard,
          disabled: true,
        }),
        fullname: new FormControl({
          value: this.capitalizeFullName(
            `${this.passenger.name} ${this.passenger.name} ${this.passenger.name}`
          ),
          disabled: true,
        }),

        login: new FormControl(this.passenger.login, [
          Validators.required,
          Validators.minLength(1),
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(1),
        ]),
      });
    });
  }

  onSavePassenger() {
    this._passengerService
      .editPassengerLoginAndPassword(this.passengerForm.value)
      .subscribe(() => this.router.navigate(["/dashboard"]));
  }

  get login() {
    return this.passengerForm.get("login");
  }

  get password() {
    return this.passengerForm.get("password");
  }

  capitalizeFullName(val: string) {
    return val
      .toLowerCase()
      .trim()
      .split(" ")
      .map((v) => v[0].toUpperCase() + v.substr(1))
      .join(" ");
  }
}
