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

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { }

  getCityWeather(): void {
    this.weatherService.getApiCityWeather(API_ACCESS_KEY, this.cityName).subscribe(result => {
      console.log(result)
    });
  }
}
