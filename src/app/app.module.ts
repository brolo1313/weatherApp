import { AddcityComponent } from './shared/components/addcity/addcity.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { DataService } from './shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostWeatherComponent } from './shared/components/post-weather/post-weather.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AlertComponent,
    HomePageComponent,
    PostPageComponent,
    PostWeatherComponent,
    AddcityComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
