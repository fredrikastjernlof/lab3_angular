import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.scss',
})
export class Convert {

  meters: number = 0;
  feet: number = 0;

  celsius: number = 0;
  fahrenheit: number = 32;

  selectedConverter: string = 'length';

  convertToFeet() {
    this.feet = +(this.meters * 3.28084).toFixed(2);
  }

  convertToMeters() {
    this.meters = +(this.feet / 3.28084).toFixed(2);
  }

  convertToFahrenheit() {
    this.fahrenheit = +((this.celsius * 9/5) + 32).toFixed(2);
  }

  convertToCelsius() {
    this.celsius = +((this.fahrenheit - 32) * 5/9).toFixed(2);
  }

}
