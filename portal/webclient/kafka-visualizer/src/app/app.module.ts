import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LiveDataModule} from "./live-data/live-data.module";
import {CardModule} from "./card/card.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LiveDataModule,
    CardModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
