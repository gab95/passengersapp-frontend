import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import {
  LoginGuard,
  TokenVerifyGuard,
  AuthService,
  PassengerService,
} from "./service.index";

@NgModule({
  declarations: [],
  providers: [AuthService, PassengerService, LoginGuard, TokenVerifyGuard],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class ServiceModule {}
