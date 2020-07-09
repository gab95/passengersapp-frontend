import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { PaymentsComponent } from '../../pages/payments/payments.component';
import { TopupsComponent } from '../../pages/topups/topups.component';

// import { TablesComponent } from "../../pages/tables/tables.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "editar", component: UserProfileComponent },
  { path: "pagos", component: PaymentsComponent },
  { path: "recargas", component: TopupsComponent },
];
