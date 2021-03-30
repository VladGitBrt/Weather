import {Component, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-get-weather',
  templateUrl: './get-weather.component.html',
  styleUrls: ['./get-weather.component.css']
})
export class GetWeatherComponent {
  constructor(private http: HttpClient) { }
  response;
  condition = 'Search';
  isDisabled = 'false';
  @Output()foundCountry = new EventEmitter<object>();
  country = [];
  key = 'c187a1ff8b9459f9829676efc9261ab1';
  sendRequest(countryName): any {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + countryName + '&APPID=' + this.key).subscribe(
      (response) => {
        this.condition = 'Search';
        this.response = response;
        this.foundCountry.emit({
          name: this.response.name,
          temperature: Math.round((this.response.main.temp - 273.15)) + '°C',
          pressure: this.response.main.pressure + ' GP',
          windSpeed: this.response.wind.speed + ' km/h',
          wDescription: this.response.weather[0].description
        });
      }
    );
    this.condition = 'Loading...';
  }



}
