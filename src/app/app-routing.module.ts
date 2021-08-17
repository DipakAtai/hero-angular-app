import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // {path:"/home",component:AppComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'heroes', component:HeroesComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'messages',component:MessageComponent},
  {path:'detail/:id',component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
