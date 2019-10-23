import { Component } from '@angular/core';
import {GeolocationService} from "./services/geolocation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  constructor(private geolocationService: GeolocationService) {}

  ngOnInit() {
    //this.forecastService.weather$.subscribe(console.log);
    this.geolocationService.requestGeolocation();
  }
}
