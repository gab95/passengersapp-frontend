import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/service.index";
import { Login } from "src/app/model/login.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public router: Router, private _authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  onLogin() {
    this.loginForm.controls["login"].value === null
      ? this.loginForm.controls["login"].setValue("")
      : true;
    this.loginForm.controls["password"].value === null
      ? this.loginForm.controls["password"].setValue("")
      : true;

    if (this.loginForm.invalid) {
      return;
    }

    let passenger = new Login(
      this.loginForm.value.login,
      this.loginForm.value.password
    );

    console.log(passenger);

    this._authService
      .login(passenger)
      .subscribe((resp) => this.router.navigate(["/dashboard"]));
  }

  get login() {
    return this.loginForm.get("login");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
