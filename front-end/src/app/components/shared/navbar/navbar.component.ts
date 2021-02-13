import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-13 05:28:34
// =======================================================================================
// Version    Description
// [1.0.0]    Navbar for component navigation.
// =======================================================================================

@Component({
  selector: 'zemoga-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public srv: NavbarService) {}
}
