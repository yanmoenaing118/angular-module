import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, CounterComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
