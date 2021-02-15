import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { HowItWorksComponent } from './components/main/how-it-works/how-it-works.component';
import { LoginComponent } from './components/main/login/login.component';
import { TrialsComponent } from './components/main/trials/trials.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trials', component: TrialsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
