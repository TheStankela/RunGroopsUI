import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { CreateClubComponent } from './clubs/create-club/create-club.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './account/profile/profile.component';
import { UpdateClubComponent } from './clubs/update-club/update-club.component';
import { RacesComponent } from './races/races/races.component';
import { RaceSingleComponent } from './races/race-single/race-single.component';
import { RaceCreateComponent } from './races/race-create/race-create.component';
import { RaceUpdateComponent } from './races/race-update/race-update.component';
import { AuthService } from './services/auth.service';
import { ClubService } from './services/club.service';
import { RaceService } from './services/race.service';
import { AccountService } from './services/account.service';
import { EditProfileComponent } from './account/edit-profile/edit-profile.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { UsersComponent } from './users/users/users.component';
import { UserSingleComponent } from './users/user-single/user-single.component';

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
    CreateClubComponent,
    ProfileComponent,
    UpdateClubComponent,
    RacesComponent,
    RaceSingleComponent,
    RaceCreateComponent,
    RaceUpdateComponent,
    EditProfileComponent,
    DashboardComponent,
    UsersComponent,
    UserSingleComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    IconModule,
    GridModule,
    HttpClientModule,
    FormsModule,
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatPaginatorModule,
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule.forRoot(
    {
      showForeground: true
    }
  ),
  ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    progressBar: true
  })
  ],
  providers: [AuthService, ClubService, RaceService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
