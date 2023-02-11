import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../services/menu.service";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  public data: any;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menu();
  }

  menu() {
    this.menuService.getMenu().subscribe(res => {
      this.data = res;
    });
  }
}
