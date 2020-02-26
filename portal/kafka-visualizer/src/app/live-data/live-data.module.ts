import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LiveDataComponent} from './live-data.component';
import {CardModule} from "../card/card.module";
import {FormsModule} from "@angular/forms";
import {MainPipe} from "../shared/pipes/pipes.module";


@NgModule({
  declarations: [LiveDataComponent],
  exports: [
    LiveDataComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    MainPipe
  ]
})
export class LiveDataModule {
}
