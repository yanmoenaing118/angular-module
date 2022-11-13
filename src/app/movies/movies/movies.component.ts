import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../provider/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  selectedMovie: any = null;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((res) => (this.movies = res));
  }

  selectMovie(id: string | null | undefined) {
    this.moviesService
      .getMovieDetail(id)
      .subscribe((res) => (this.selectedMovie = res));
  }
}
