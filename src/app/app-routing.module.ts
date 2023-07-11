import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './index/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClubsComponent } from './clubs/clubs/clubs.component';
import { CreateClubComponent } from './clubs/create-club/create-club.component';
import ClubSingleComponent from './clubs/club-single/club-single.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateClubComponent } from './clubs/update-club/update-club.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'clubs', component:ClubsComponent},
  {path:'clubs/create', component: CreateClubComponent},
  {path:'clubs/edit/:id', component: UpdateClubComponent},
  {path:'clubs/:id', component: ClubSingleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
