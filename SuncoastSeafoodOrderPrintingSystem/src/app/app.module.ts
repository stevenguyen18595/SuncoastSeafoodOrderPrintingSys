import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuncoastItemComponent } from './suncoast-item/suncoast-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SuncoastItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
