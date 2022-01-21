import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { FetchresultComponent } from './fetchresult/fetchresult.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';



@NgModule({
  declarations: [
    AppComponent,
    FetchresultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
    
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
