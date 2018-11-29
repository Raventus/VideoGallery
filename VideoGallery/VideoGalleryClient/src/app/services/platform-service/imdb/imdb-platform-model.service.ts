import { Injectable, Inject } from '@angular/core';
import {PlatformAbstractService, ParameterItem} from '../abstract/platform-abstract.service';
import {SearhModelAbstractService} from '../../../model/search-model/abstract/searh-model-abstract.service';
import { from, Observable } from 'rxjs';
import {FilmModelIMDB} from '../../../model/film-model/imdb/film-model-imdb';
import {FormFilmIMDBGroup} from "../../../model/form-film-control/imdb/form-film-imdb-control"
import {HttpRequestAbstractService} from '../../http-request-service/abstract/http-request-abstract.service';
import {ResultModelAbstract} from '../../../model/result-model/abstract/result-model-abstract';
import {ResultModelIMDB} from '../../../model/result-model/imdb/result-model-imdb';
import 'rxjs-compat';



// служба для платформы IMDB
@Injectable({
  providedIn: 'root'
})
export class ImdbPlatformService implements PlatformAbstractService {
  
  // имя платформы
  public nameOfPlatform: string = "IMDB Platform";

  // текстовое отображение параметров поиска
  public ListOfParametersToSearch: ParameterItem[] = [
    new ParameterItem ("Name of Film"),
    new ParameterItem ("Year of film creation")
  ];
  
  _resultSearch: ResultModelAbstract = new ResultModelIMDB();

  public get resSearch (): Observable <ResultModelIMDB> {
      return this._resSearch;
  }

  public set resSearch (value: Observable <ResultModelIMDB>) {
    this._resSearch = value;
  }


  _resSearch: Observable<ResultModelAbstract> = new Observable <ResultModelIMDB>();
 

 // searchModel - служба для поиск0а моделей
  constructor(private searchModel:SearhModelAbstractService, public httpserver: HttpRequestAbstractService) {
  }

  // Форма для поиска под конкретную платформу (imdb)
  form: FormFilmIMDBGroup = new FormFilmIMDBGroup();

  // абстрактный класс для предоставления службы модели поиска
  GetSearchModel () :SearhModelAbstractService {
    return this.searchModel;
  }
  queryString : SearchParameter[] = [];

  fillQueryStringFromForm(page: string) {
    this.form.FormFilmControls.forEach(element => {
     this.queryString.push(new SearchParameter(element._property, element.value));
     this.queryString.push(new SearchParameter("page", page));
   });
 }

 doPlatformSearch (page:string): Observable<ResultModelAbstract> {
  if (this._resultSearch.getFilmCollectionFromCashe("", page) === null)
  {
  this.fillQueryStringFromForm(page); 
  return this.httpserver.Get(this.queryString)
                  .map(dataitem => {
                    var result = new ResultModelIMDB();
                    result.countOfFilms = dataitem.Data.totalResults;
                    result.filmRequestCollection = dataitem.Data.Search;
                    result.isValid = dataitem.Data.Response;
                    this._resultSearch = result;
                    this._resultSearch.casheFilmCollection.allPageFilmCollection[page] = dataitem.Data.Search;
                    return result;
                  })
                }
                else {

                return this._resultSearch.casheFilmCollection.allPageFilmCollection[page];
              }
                  
       } 


  // .subscribe (val => { 
  //   this._resultSearch.filmRequestCollection = val.Search;
  //   this._resultSearch.countOfFilms = val.totalResults; 
  //    this._resultSearch.isValid = val.Response; 
  //    console.log (val);
  //  console.log(this._resultSearch)
  
  // добавляется к ссылке, если она отнасительная
  hostURL: string = "https://www.imdb.com/title/";
}

export class SearchParameter {

  constructor (public name: string, public value: string) {}
 

  }




