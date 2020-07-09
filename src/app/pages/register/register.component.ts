import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { validaLetras, validaNumeros } from "../../config/config";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/service.index";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public router: Router, private _authService: AuthService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      idcard: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.pattern(validaNumeros),
      ]),
      ci: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
        Validators.pattern(validaNumeros),
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
        Validators.pattern(validaLetras),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
        Validators.pattern(validaLetras),
      ]),
      mlastname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
        Validators.pattern(validaLetras),
      ]),
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

  onRegister() {
    this.registerForm.controls["idcard"].value === null
      ? this.registerForm.controls["idcard"].setValue("")
      : true;
    this.registerForm.controls["ci"].value === null
      ? this.registerForm.controls["ci"].setValue("")
      : true;
    this.registerForm.controls["name"].value === null
      ? this.registerForm.controls["name"].setValue("")
      : true;
    this.registerForm.controls["lastname"].value === null
      ? this.registerForm.controls["lastname"].setValue("")
      : true;
    this.registerForm.controls["mlastname"].value === null
      ? this.registerForm.controls["mlastname"].setValue("")
      : true;
    this.registerForm.controls["login"].value === null
      ? this.registerForm.controls["login"].setValue("")
      : true;
    this.registerForm.controls["login"].value === null
      ? this.registerForm.controls["login"].setValue("")
      : true;
    this.registerForm.controls["password"].value === null
      ? this.registerForm.controls["password"].setValue("")
      : true;

    if (this.registerForm.invalid) {
      return;
    }

    //todo - hacer el servicio de registro
    this._authService.register(this.registerForm.value).subscribe((resp) => {
      this.router.navigate(["/login"]);
    });
  }

  get idcard() {
    return this.registerForm.get("idcard");
  }

  get ci() {
    return this.registerForm.get("ci");
  }

  get name() {
    return this.registerForm.get("name");
  }

  get lastname() {
    return this.registerForm.get("lastname");
  }

  get mlastname() {
    return this.registerForm.get("mlastname");
  }

  get login() {
    return this.registerForm.get("login");
  }

  get password() {
    return this.registerForm.get("password");
  }
}
