import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import {ROUTES} from './app.routes';
import { GreetingsComponent } from './Greetings/Greetings.component';
import { SearchFilmsComponent } from './SearchFilms/SearchFilms.component';
import { MenuComponent } from "./Menu/Menu.component";


@NgModule({
  declarations: [
    AppComponent
    , GreetingsComponent
    , SearchFilmsComponent
    , MenuComponent
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
