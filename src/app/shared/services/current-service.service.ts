import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CurrentServiceService  implements OnInit{
  
  
  latitude: number | undefined;
  longitude: number | undefined;

 
  URL = 'https://api.openweathermap.org/data/2.5/weather?lat=';

  // {lat}&lon={lon}&appid={API key}

  APIkey ='2f1ebf1f3cb76063b686de9b127fe94e';
  response: any;

  
  constructor(
    private http: HttpClient
  ){}
    
  
  ngOnInit(){
    if(!navigator.geolocation){
      console.log('location not supported')
    }
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(`latitude : ${position.coords.latitude} and longitude : ${position.coords.longitude}`)
      this.latitude =  position.coords.latitude;
      this.longitude =  position.coords.longitude;
      // console.log(this.latitude)
      // console.log(this.longitude)
      this.getCurrentLocation();
    })

    // this.getCurrentLocation(this.latitude,this.longitude)

  }

  getCurrentLocation() {
    this.http.get(this.URL + this.latitude + '&lon='+ this.longitude  + '&units=metric'+ '&APPID='  + this.APIkey +'&lang=ua')
    .subscribe((response) => { 
      this.response = response;
     });
    //  console.log(response)
  }
  
}

