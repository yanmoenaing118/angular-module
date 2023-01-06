import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ChildApp , NestedChildApp, TwoNestedChildComponent} from './app.component';

@NgModule({
  declarations: [AppComponent, ChildApp, NestedChildApp, TwoNestedChildComponent],
  imports: [BrowserModule, FormsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
