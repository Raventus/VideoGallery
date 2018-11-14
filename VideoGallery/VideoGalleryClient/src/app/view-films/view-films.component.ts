import { Component, OnInit } from '@angular/core';
import {HttpRequestServer} from '../model/http-request-model';
import {Observable} from "rxjs";
import {FilmModelAbstract} from '../model/film-model/abstract/film-model-abstract';
import {PlatformModelAbstract, ParameterItem} from '../model/platform-model/abstract/platform-model-abstract';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';
import { JsonpModule } from '@angular/http';

@Component({
  selector: 'app-view-films',
  templateUrl: './view-films.component.html',
  styleUrls: ['./view-films.component.css']
})
export class ViewFilmsComponent implements OnInit {

  

  
  FilmCollection: FilmModelAbstract[];
  
  constructor(private httpRequest: HttpRequestServer) { 
    
  }

  ngOnInit() {
    var dataObject = this.httpRequest.Get()
    .map(item=>  JSON.parse(item.Data))
    .subscribe(val =>{ 
      this.FilmCollection = val.Search;
    }
      );

  }
}

