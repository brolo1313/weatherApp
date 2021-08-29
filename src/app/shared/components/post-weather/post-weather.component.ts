import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-weather',
  templateUrl: './post-weather.component.html',
  styleUrls: ['./post-weather.component.scss']
})
export class PostWeatherComponent implements OnInit {


  city = 'London';
  day = 16;
  response:any;
  name :any;
  

  constructor(
    private dataService: DataService,
   
  ) { }

  ngOnInit() {
    // this.dataService.getCurrentWeather(this.city).subscribe((response) => { 
    //   this.response = response;
    //   console.log(response)});
      // console.log(response)
   
  }

    

}
