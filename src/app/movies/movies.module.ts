import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesService } from './provider/movies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
