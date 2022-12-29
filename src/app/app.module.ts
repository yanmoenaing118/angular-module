import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, AppCounter, Pane } from './app.component';

@NgModule({
  declarations: [AppComponent, AppCounter, Pane],
  imports: [BrowserModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
