import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataService {

  APIkey = '2f1ebf1f3cb76063b686de9b127fe94e';
  URL = 'https://api.openweathermap.org/data/2.5/weather?q=';  
  public city: string | undefined;
  response: any;

  // {city name}&cnt={cnt}&appid=

  constructor(private http: HttpClient) { }


    // getCurrentWeather(city: string) {
    //   return this.http.get(this.URL + city + '&APPID=' + this.APIkey);
   
    // }

    searchWeather(){
      this.http.get(this.URL + this.city + '&units=metric' + '&APPID=' + this.APIkey + '&lang=uk' + '/').subscribe((response) => { 
        this.response = response;
        console.log(response)});
        
    }
    

   
}
