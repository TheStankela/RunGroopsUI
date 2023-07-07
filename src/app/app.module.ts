import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule, } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { GridModule } from '@coreui/angular';
import { MainComponent } from './index/main/main.component';
import { HeroComponent } from './index/hero/hero.component';
import { PlanetComponent } from './index/planet/planet.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClubsComponent } from './clubs/clubs/clubs.component';
import ClubSingleComponent from './clubs/club-single/club-single.component';
import { ClubDetailsComponent } from './clubs/club-details/club-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HeroComponent,
    PlanetComponent,
    LoginComponent,
    RegisterComponent,
    ClubsComponent,
    ClubSingleComponent,
    ClubDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    IconModule,
    GridModule,
    HttpClientModule,
    FormsModule,
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
