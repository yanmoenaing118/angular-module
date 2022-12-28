import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ChildComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
