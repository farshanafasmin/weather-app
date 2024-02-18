import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatherData: any = []
  searchQuery: string = '';
  searchPerformed: boolean = false; 

  constructor(private http: HttpClient) { }

  serviceData: number = 1000

  serviceMethod() {
    alert("service method worked")
  }


  getWeather() {
    this.searchPerformed = true;
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='  + this.searchQuery + '&appid=5b4bee0ba241d092159faf007e166080')
      .subscribe((data) => {
        this.weatherData = data;
      }, (error) => {
        console.error('Error fetching weather data:', error);
      });
  }

  getCurrentDateTime(): string {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  }

  kelvinToCelsius(kelvin: number): string{
    return (kelvin - 273.15).toFixed(2);
  }
  ngOnInit(): void {
    this.getWeather()

  }
  title = 'weather';
}

