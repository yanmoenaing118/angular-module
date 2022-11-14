import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongsListComponent } from './songs-list/songs-list.component';

const routes: Routes = [
  {
    path: 'songs',
    component: SongsListComponent,
  },
  {
    path: 'songs/:id',
    component: SongDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsRoutingModule {}
