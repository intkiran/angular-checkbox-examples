import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DynamicCheckboxListComponent } from "../dynamic-checkbox-list/dynamic-checkbox-list.component";
import { CheckboxComponentBasicComponent } from "../checkbox-component-basic/checkbox-component-basic.component";
import { CheckboxChangeExamplesComponent } from './checkbox-change-examples/checkbox-change-examples.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DynamicCheckboxListComponent,
    CheckboxComponentBasicComponent,
    CheckboxChangeExamplesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
