import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router"

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import {GreetingsComponent} from './greetings/greetings.component';
import {SearchFilmComponent} from './search-film/search-film.component';
import {ViewFilmsComponent} from './view-films/view-films.component';


import {PlatformModelAbstract} from './model/platform-model/abstract/platform-model-abstract';
import {ImdbPlatformModelService} from './model/platform-model/imdb/imdb-platform-model.service';
import  {AuthorModelService} from './model/author-model-service';
import {SearhModelAbstractService} from './model/search-model/abstract/searh-model-abstract.service';
import {ImdbSearchModelService} from './model/search-model/imdb/imdb-search-model.service';
import {HttpRequestServer, REQUEST_URL} from './model/http-request-model';

import {ROUTES} from './app.routes';
import { ContactsComponent } from './contacts/contacts.component';


const SERVER_PORT = 4100;


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GreetingsComponent,
    SearchFilmComponent,
    ContactsComponent,
    ViewFilmsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: PlatformModelAbstract, useClass: ImdbPlatformModelService }
    , {provide: SearhModelAbstractService, useClass: ImdbSearchModelService}
    , AuthorModelService
    , HttpRequestServer
    ,{provide: REQUEST_URL, useValue: `http://${location.hostname}:${SERVER_PORT}/api/VideoGalleryApi/`}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
