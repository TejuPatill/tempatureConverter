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
    if (this.celcius === null) this.fahrenheit = null;
    else this.fahrenheit = (9 / 5) * this.celcius + 32;
  }

  fahrToDeg() {
    if (this.fahrenheit === null) this.celcius = null;
    else this.celcius = (5 / 9) * (this.fahrenheit - 32);
  }
}
