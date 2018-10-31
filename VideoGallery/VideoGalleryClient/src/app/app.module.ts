import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router"

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import {GreetingsComponent} from './greetings/greetings.component';
import {SearchFilmComponent} from './search-film/search-film.component';

import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GreetingsComponent,
    SearchFilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
