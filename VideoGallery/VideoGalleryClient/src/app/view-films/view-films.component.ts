import { Component, OnInit } from '@angular/core';
import {HttpRequestServer} from '../model/http-request-model';
import {Observable} from "rxjs";
import {FilmModelAbstract} from '../model/film-model/abstract/film-model-abstract';
import {PlatformModelAbstract, ParameterItem} from '../model/platform-model/abstract/platform-model-abstract';

@Component({
  selector: 'app-view-films',
  templateUrl: './view-films.component.html',
  styleUrls: ['./view-films.component.css']
})
export class ViewFilmsComponent implements OnInit {

  

  
  FilmCollection: FilmModelAbstract[];
  
  constructor(private httpRequest: HttpRequestServer) { 
    this.httpRequest.Get().subscribe(collection => {
      this.FilmCollection = collection});
  }

  ngOnInit() {

  }

}
