import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {GreetingsComponent} from "./greetings.component"


@NgModule({
    declarations: [GreetingsComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule
    ],
    providers: [],
  })
  export class GreetingsModule { }