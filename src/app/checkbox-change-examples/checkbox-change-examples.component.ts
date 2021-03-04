import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkbox-change-examples",
  templateUrl: "./checkbox-change-examples.component.html",
  styleUrls: ["./checkbox-change-examples.component.css"]
})
export class CheckboxChangeExamplesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  termsChange(selected: any): void {
    console.log(
      selected.target.name,
      selected.target.value,
      selected.target.checked
    );
  }
}
