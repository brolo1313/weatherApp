import { CurrentServiceService } from './../shared/services/current-service.service';
import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  form!: FormGroup;

  imgUrl = 'http://openweathermap.org/img/w/'

  

  arrayCitis = {};

  constructor(
    public dataService: DataService,
    public current : CurrentServiceService,
    private https:HttpClient
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      search: new FormControl(null, )
    });

   this.current.ngOnInit()

  }


  search(){
      this.dataService.searchWeather();
      // localStorage.setItem("cityZ", this.form.value);
      // console.log(this.form.value)
      // console.log(this.form.get('search'))
      this.form.reset();
  }  


  addCity(){
    if(this.dataService.response){
      
    }
  }

  
}
