import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent{
  countries = [];
  response;
  constructor() {}
  title = 'Weather';
  addFoundedCountry(obj): void{
    this.countries.push(obj);

  }
}
