import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesService } from './provider/movies.service';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
  exports: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
