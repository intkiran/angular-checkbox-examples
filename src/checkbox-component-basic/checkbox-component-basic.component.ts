import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkbox-component-basic",
  templateUrl: "./checkbox-component-basic.component.html",
  styleUrls: ["./checkbox-component-basic.component.css"]
})
export class CheckboxComponentBasicComponent implements OnInit {
  constructor() {}
  isAccepted = true;

  ngOnInit() {}
}
