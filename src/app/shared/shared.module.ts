import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PostWeatherComponent } from './components/post-weather/post-weather.component';
import { AlertComponent } from './components/alert/alert.component';
import { AddcityComponent } from './components/addcity/addcity.component';

@NgModule({
    imports: [HttpClientModule],
    exports: [
      HttpClientModule,
      
    ],
    declarations: [
    
  
    
  ]
})

export class SharedModule {

}