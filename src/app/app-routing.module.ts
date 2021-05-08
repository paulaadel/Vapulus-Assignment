import { SearchComponent } from './search/search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'Home' , component:HomeComponent},
  {path: "" , redirectTo:'/Home', pathMatch:"full"},
  {path:'Home/:id', component:MovieDetailComponent},
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
