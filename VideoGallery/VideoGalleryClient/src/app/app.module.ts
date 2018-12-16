import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, NavigationStart, NavigationEnd, ActivatedRoute} from "@angular/router";


//Компоненты
import { AppComponent } from './app.component';
import { MenuComponent } from './view/menu/menu.component';
import {GreetingsComponent} from './view/greetings/greetings.component';
import {SearchFilmComponent} from './view/search-film/search-film.component';
import {ViewFilmsComponent} from './view/view-films/view-films.component';
import { ContactsComponent } from './view/contacts/contacts.component';
import { DetailFilmComponent } from './view/detail-film/detail.film.component';
import {LoaderComponent} from './view/shared/components/loader/loader.component';


import {PlatformAbstractService} from './services/platform-service/abstract/platform-abstract.service';
import {ImdbPlatformService} from './services/platform-service/imdb/imdb-platform-model.service';

import  {AuthorModelService} from './services/additional/author-model-service';
import {LoaderService} from './services/additional/loader';

import {SearhModelAbstractService} from './model/search-model/abstract/searh-model-abstract.service';
import {ImdbSearchModelService} from './model/search-model/imdb/imdb-search-model.service';

import {HttpRequestAbstractService, REQUESTURL} from './services/http-request-service/abstract/http-request-abstract.service';
import {HttpRequestImdbService, REQUESTURLIMDB} from './services/http-request-service/imdb/http-request-imdb.service';

import {ResultModelAbstract} from './model/result-model/abstract/result-model-abstract';
import {ResultModelIMDB} from './model/result-model/imdb/result-model-imdb';

// структурные директивы
import {PagerDirective} from "./view/shared/directives/pager.directive";


import  {ROUTES} from './app.routes';



const SERVER_PORT = 4100;


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GreetingsComponent,
    SearchFilmComponent,
    ContactsComponent,
    ViewFilmsComponent,
    PagerDirective
    , DetailFilmComponent
    ,LoaderComponent
    
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: PlatformAbstractService, useClass: ImdbPlatformService }
    , {provide: SearhModelAbstractService, useClass: ImdbSearchModelService}
    , {provide: HttpRequestAbstractService, useClass: HttpRequestImdbService}
    , AuthorModelService
    ,LoaderService
    ,{provide: REQUESTURL, useValue: `http://${location.hostname}:${SERVER_PORT}/api/VideoGalleryApi/`}
    ,{provide: REQUESTURLIMDB, useValue: `http://${location.hostname}:${SERVER_PORT}/api/VideoGalleryApi/`}
    ,{provide:ResultModelAbstract, useClass:ResultModelIMDB}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
