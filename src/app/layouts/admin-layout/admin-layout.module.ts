import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClipboardModule } from "ngx-clipboard";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { PaymentsComponent } from "../../pages/payments/payments.component";
import { TopupsComponent } from "../../pages/topups/topups.component";

//angular material
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatFormFieldModule,
    ClipboardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    PaymentsComponent,
    TopupsComponent,
  ],
})
export class AdminLayoutModule {}
