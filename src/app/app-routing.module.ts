import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'photos',component:PhotosComponent},
  {path:'latest-news',component:LatestNewsComponent},
  {path:'career-page',component:CareerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
