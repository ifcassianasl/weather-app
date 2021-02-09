import { Weather } from './../../weather.model';
import { WeatherService } from './../../weather.service';
import { API_ACCESS_KEY } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  cityName: string = '';
  weatherFlag: boolean = false;
  currentWeather: Weather = {
    city: '',
    descriptions: [],
    temperature: 0,
    humidity: 0,
    precipitation: 0,
    windSpeed: 0,
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  getCityWeather(): void {
    this.weatherService.getApiCityWeather(API_ACCESS_KEY, this.cityName).subscribe(result => {
      const { weather_descriptions, temperature, humidity, precip, wind_speed } = result.current;
      console.log(result)
      this.weatherFlag = true;
      this.currentWeather.city = result.location.name;
      this.currentWeather.descriptions = weather_descriptions;
      this.currentWeather.temperature = temperature;
      this.currentWeather.humidity = humidity;
      this.currentWeather.precipitation = precip;
      this.currentWeather.windSpeed = wind_speed;
      console.log(this.currentWeather)
    });
  }
}
