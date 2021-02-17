import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyDirective } from './apply.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonServiceService } from './common-service.service';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { google } from '@google/maps';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ApplyDirective
    //ChangeThemeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXeJdLhtxFKZcSuHkytVUVn2NEAQr1yr8'
    })
  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
