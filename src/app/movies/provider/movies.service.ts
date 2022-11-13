import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  BASE_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(this.BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getMovieDetail(id: string | null | undefined) {
    return this.http.get(`${this.BASE_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  createMovie(body: any) {
    return this.http.post(`${this.BASE_URL}`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
