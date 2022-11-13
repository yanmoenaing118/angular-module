import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesModule } from './movies/movies.module';
import { GalleryModule } from './gallery/gallery.module';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MoviesModule,
    GalleryModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
