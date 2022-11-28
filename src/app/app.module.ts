import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesModule } from './movies/movies.module';
import { GalleryModule } from './gallery/gallery.module';
import { CastsModule } from './casts/casts.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SongsModule } from './songs/songs.module';

import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './widgets/button/button.component';
import { ListComponent } from './widgets/list/list.component';


@NgModule({
  declarations: [AppComponent, ChildComponent, CardComponent, ButtonComponent, ListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MoviesModule,
    GalleryModule,
    CastsModule,
    SongsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
