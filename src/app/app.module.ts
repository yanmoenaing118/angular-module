import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, AppCounter } from './app.component';

@NgModule({
  declarations: [AppComponent, AppCounter],
  imports: [BrowserModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
