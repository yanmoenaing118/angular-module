import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesService } from '../provider/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  selectedMovie: any = null;

  titleControl = new FormControl('');
  posterControl = new FormControl('');
  ratingControl = new FormControl('');
  favoriteControl = new FormControl('');
  countryControl = new FormControl('');

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMoviesList();
  }

  selectMovie(id: string | null | undefined) {
    this.moviesService
      .getMovieDetail(id)
      .subscribe((res) => (this.selectedMovie = res));
  }

  createMovie() {
    const movie = {
      title: this.titleControl.value,
      image: this.posterControl.value,
      rating: this.ratingControl.value,
      isFav: this.favoriteControl.value,
      country: this.countryControl.value,
    };

    console.log('movie', movie);

    this.moviesService.createMovie(movie).subscribe((res) => {
      if (res) {
        this.fetchMoviesList();
      }
    });
  }

  fetchMoviesList() {
    this.moviesService.getMovies().subscribe((res) => (this.movies = res));
  }
}
