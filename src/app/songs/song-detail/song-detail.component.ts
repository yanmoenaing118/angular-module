import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Song } from '../types';


@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit, OnChanges {

  @Output() clickSong = new EventEmitter();
  @Input('mySong') song!: Song | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. ngOnChange')
    for(let changePropName in changes) {
      const change = changes[changePropName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);

      console.log(`current: ${current}, previous: ${previous}`)
    }
  }

  ngOnInit(): void {
    console.log('2. ngOnInit');
  }

  clickedOnDetail(song: Song | undefined) {
    this.clickSong.emit(song);
  }

  songDetailLog() {
    console.log(this.song);
  }


}
