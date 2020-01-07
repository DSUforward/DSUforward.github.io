import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot-navbar',
  templateUrl: './boot-navbar.component.html',
  styleUrls: ['./boot-navbar.component.css']
})
export class BootNavbarComponent implements OnInit {
  collapsed = true;
  constructor() { }

  ngOnInit() {
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    // [ngClass]="{'collapse' : collapsed, 'navbar-collapse' : true}"
  }
}
