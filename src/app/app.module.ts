import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule, } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { GridModule } from '@coreui/angular';
import { MainComponent } from './main/main.component';
import { HeroComponent } from './hero/hero.component';
import { PlanetComponent } from './planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HeroComponent,
    PlanetComponent
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
