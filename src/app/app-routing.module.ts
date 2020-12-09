import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./COMPONENTS/home/home.component";
import {ChartComponent} from "./COMPONENTS/chart/chart.component";
import {ProfilePageComponent} from "./COMPONENTS/profile-page/profile-page.component";
import {NewsComponent} from './COMPONENTS/news/news.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'chart/:symbol', component: ChartComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
