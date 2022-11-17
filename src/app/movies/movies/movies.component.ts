import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormsModule } from '@angular/forms';
import { MoviesService } from '../provider/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  selectedMovie: any = null;

  form = this.fb.group({
    title: [''],
    image: [''],
    rating: [''],
    isFav: [''],
    country: [''],
  });

  constructor(private moviesService: MoviesService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fetchMoviesList();
  }

  selectMovie(id: string | null | undefined) {
    this.moviesService
      .getMovieDetail(id)
      .subscribe((res) => (this.selectedMovie = res));
  }

  createMovie() {
    const movie = this.form.value;

    console.log('movie', movie);

    this.moviesService.createMovie(movie).subscribe((res) => {
      if (res) {
        this.fetchMoviesList();
      }
    });
  }

  deleteMovie(id: any) {
    // this.moviesService
    console.log(id);
  }

  fetchMoviesList() {
    this.moviesService.getMovies().subscribe((res) => (this.movies = res));
  }
}
