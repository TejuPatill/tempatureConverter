import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  celcius;
  fahrenheit;

  degToFahr() {
    this.fahrenheit = (9 / 5) * this.celcius + 32;
  }

  fahrToDeg() {
    this.celcius = (5 / 9) * (this.fahrenheit - 32);
  }
}
