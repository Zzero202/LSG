import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './service/app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AddDoctorsComponent } from './admin/add-doctors/add-doctors.component';
import { HomeComponent } from './user/home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
@NgModule({
  declarations: [AppComponent, SignupComponent, LoginComponent, AddDoctorsComponent, HomeComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
