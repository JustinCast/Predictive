import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  color = 'primary';
  mode = 'buffer';
  value = 0;
  bufferValue = 0;
  constructor() { }

  ngOnInit() {
  }

}
