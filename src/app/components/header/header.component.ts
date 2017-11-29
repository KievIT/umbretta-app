import { Component, OnInit } from '@angular/core';
import {navItem} from './navitem';
import {NavitemsService} from '../../services/navitems.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NavitemsService]
})
export class HeaderComponent implements OnInit {
ContentArray: navItem[];
private LOGO = require("assets/logo.png");

  constructor(private navitemsService: NavitemsService) { }

  ngOnInit() {
    this.navitemsService.getNavItems().subscribe(data => this.ContentArray = data["uknown"]);
  }

}
