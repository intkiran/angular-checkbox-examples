import { Component, OnInit } from "@angular/core";
import { Role } from "../role";

@Component({
  selector: "app-dynamic-checkbox-list",
  templateUrl: "./dynamic-checkbox-list.component.html",
  styleUrls: ["./dynamic-checkbox-list.component.css"]
})
export class DynamicCheckboxListComponent implements OnInit {
  public roles: Role[];

  constructor() {}

  ngOnInit() {
    this.roles = [
      {
        id: 1,
        name: "users",
        checked: true
      },
      {
        id: 2,
        name: "admin",
        checked: false
      },
      {
        id: 3,
        name: "support",
        checked: true
      },
      {
        id: 4,
        name: "manager",
        checked: false
      }
    ];
  }
   get selectedCheckboxList() {
    return this.roles.filter(item => item.checked);
  }
}
