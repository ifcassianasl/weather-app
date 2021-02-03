import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseUrl = 'http://api.weatherstack.com/current';

  constructor(private http: HttpClient) { }

  getApiCityWeather(accessKey: string, cityName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?access_key=${accessKey}&query=${cityName}`);
  }
}
