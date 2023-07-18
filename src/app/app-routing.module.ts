import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './index/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClubsComponent } from './clubs/clubs/clubs.component';
import { CreateClubComponent } from './clubs/create-club/create-club.component';
import ClubSingleComponent from './clubs/club-single/club-single.component';
import { ProfileComponent } from './account/profile/profile.component';
import { UpdateClubComponent } from './clubs/update-club/update-club.component';
import { RacesComponent } from './races/races/races.component';
import { RaceCreateComponent } from './races/race-create/race-create.component';
import { RaceUpdateComponent } from './races/race-update/race-update.component';
import { RaceSingleComponent } from './races/race-single/race-single.component';
import { EditProfileComponent } from './account/edit-profile/edit-profile.component';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { UsersComponent } from './users/users/users.component';
import { UserSingleComponent } from './users/user-single/user-single.component';

const routes: Routes = [
  { path: '', component: MainComponent},

  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent},

  { path: 'profile', component: ProfileComponent},
  { path: 'profile/dashboard', component: DashboardComponent},
  { path: 'profile/edit', component: EditProfileComponent},

  {path: 'clubs', component:  ClubsComponent},
  {path:'clubs/create', component: CreateClubComponent},
  {path:'clubs/edit/:id', component: UpdateClubComponent},
  {path:'clubs/:id', component: ClubSingleComponent},

  {path: 'races', component:  RacesComponent},
  {path:'races/create', component: RaceCreateComponent},
  {path:'races/edit/:id', component: RaceUpdateComponent},
  {path:'races/:id', component: RaceSingleComponent},

  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserSingleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
