import { Component, OnInit } from '@angular/core';
import {HttpRequestServer} from '../../model/http-request-model';
import {FilmModelIMDB} from '../../model/film-model/imdb/film-model-imdb';
import {PlatformAbstractService} from '../../services/platform-service/abstract/platform-abstract.service';



@Component({
  selector: 'app-view-films',
  templateUrl: './view-films.component.html',
  styleUrls: ['./view-films.component.css']
})
export class ViewFilmsComponent implements OnInit {

  

  
  FilmCollection: FilmModelIMDB[];
  currentCountOfSearch: number;

  constructor(/*private httpRequest: HttpRequestServer,*/ private _platform: PlatformAbstractService) { 
    
  }

  ngOnInit() {
    /*this.httpRequest.Get()
    .map(item=>  JSON.parse(item.Data))
    .subscribe(val =>{ 
      val.Search.forEach (element => element.imdbID = this._platform.hostURL + element.imdbID);
      this._platform.FilmCollection = val.Search;  
      this.currentCountOfSearch = val.totalResults;
      console.log (val);
      console.log (this.currentCountOfSearch );
    }
      );*/

  }
}

