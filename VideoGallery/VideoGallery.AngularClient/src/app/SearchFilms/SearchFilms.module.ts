import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SearchFilmsComponent} from "./searchFilms.component"


@NgModule({
    declarations: [SearchFilmsComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule
    ],
    providers: [],
  })
  export class SearchFilmsModule { }