import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/service.index";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Inicio",
    icon: "ni ni-tv-2 text-primary",
    class: "",
  },

  {
    path: "/pagos",
    title: "Pagos",
    icon: "fa fa-money-bill text-success",
    class: "",
  },

  {
    path: "/recargas",
    title: "Recargas",
    icon: "fa fa-hand-holding-usd text-info",
    class: "",
  },

  {
    path: "/editar",
    title: "Editar Información",
    icon: "fa fa-cog text-warning",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, public _authService: AuthService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
