import { Component } from '@angular/core';
import {GetWeatherService} from './get-weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  countries = [];
  response;
  constructor(private svc: GetWeatherService) {}
  title = 'Weather';
 sendRequest(countryName): void{
   this.countries = this.svc.sendRequest(countryName);
  }

}
