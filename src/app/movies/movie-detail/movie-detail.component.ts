import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() selectedMovie: any;
  @Output() deleteMovie = new EventEmitter()


  delMovie(movie: any){
    this.deleteMovie.emit(movie)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
