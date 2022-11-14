import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongsRoutingModule } from './songs-routing.module';



@NgModule({
  declarations: [
    SongsListComponent,
    SongDetailComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule
  ]
})
export class SongsModule { }
