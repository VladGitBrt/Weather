import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  response;
  foundCountry = {};
  country = [];
  name: string;
  temperature: number;
  pressure: number;
  windSpeed: number;
  weatherDescription: string;
  key = 'c187a1ff8b9459f9829676efc9261ab1';

  constructor(private http: HttpClient) {
  }

  sendRequest(countryName): any {
            this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + countryName + '&APPID=' + this.key).subscribe(
        (response) => {
          this.response = response;
          this.name = this.response.name;
          this.temperature = this.response.main.temp;
          this.pressure = this.response.main.pressure;
          this.windSpeed = this.response.wind.speed;
          this.weatherDescription = this.response.weather[0].description;
          this.foundCountry = {
            name: this.name,
            temperature: Math.round((this.temperature - 273.15)) + '°C',
            pressure: this.pressure + ' Pascal',
            windSpeed: this.windSpeed + ' km/h',
            wDescription: this.weatherDescription
          };
          console.log(this.foundCountry);
          return this.foundCountry;
        }
      );
    }
  }
