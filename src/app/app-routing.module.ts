import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './index/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClubsComponent } from './clubs/clubs/clubs.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent},
  {path: 'clubs', component:ClubsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
