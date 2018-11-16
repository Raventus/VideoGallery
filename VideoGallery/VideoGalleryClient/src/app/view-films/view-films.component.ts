import { Component, OnInit } from '@angular/core';
import {HttpRequestServer} from '../model/http-request-model';
import {Observable} from "rxjs";
import {FilmModelAbstract} from '../model/film-model/abstract/film-model-abstract';
import {FilmModelIMDB} from '../model/film-model/imdb/film-model-imdb';
import {PlatformModelAbstract, ParameterItem} from '../model/platform-model/abstract/platform-model-abstract';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';
import { JsonpModule } from '@angular/http';
import { element } from 'protractor';


@Component({
  selector: 'app-view-films',
  templateUrl: './view-films.component.html',
  styleUrls: ['./view-films.component.css']
})
export class ViewFilmsComponent implements OnInit {

  

  
  FilmCollection: FilmModelIMDB[];
  currentCountOfSearch: number;

  constructor(private httpRequest: HttpRequestServer, private _platform: PlatformModelAbstract) { 
    
  }

  ngOnInit() {
    var dataObject = this.httpRequest.Get()
    .map(item=>  JSON.parse(item.Data))
    .subscribe(val =>{ 
      val.Search.forEach (element => element.imdbID = this._platform.hostURL + element.imdbID);
      this.FilmCollection = val.Search;
      
      this.currentCountOfSearch = val.totalResults;
      console.log (val);
      console.log (this.currentCountOfSearch );
    }
      );

  }
}

