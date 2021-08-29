import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PostWeatherComponent } from './components/post-weather/post-weather.component';

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