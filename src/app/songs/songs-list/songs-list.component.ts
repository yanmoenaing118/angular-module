import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Song } from '../types';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  songList!: Array<Song>;
  song!: Song | undefined;
  

  constructor() {}



  ngOnInit(): void {
    this.songList = [
      {
       title: "Colour Glass",
       singer: "Somebody" 
      },
      {
        title: "This Love",
        singer: "Davichi"
      }
    ]
  }

  selectSong(songName: string) {
    this.song = this.songList.find(el => el.title === songName);
  }

  clickedOnSongDetails(event: any) {
    console.log(event);
  }

}
