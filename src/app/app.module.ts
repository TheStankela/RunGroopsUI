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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HeroComponent,
    PlanetComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    IconModule,
    GridModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
