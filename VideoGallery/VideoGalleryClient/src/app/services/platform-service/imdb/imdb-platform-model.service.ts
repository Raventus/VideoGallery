import { Injectable, Inject } from '@angular/core';
import {PlatformAbstractService, ParameterItem} from '../abstract/platform-abstract.service';
import {SearhModelAbstractService} from '../../../model/search-model/abstract/searh-model-abstract.service';

import {FilmModelIMDB} from '../../../model/film-model/imdb/film-model-imdb';
import {FormFilmIMDBGroup} from "../../../model/form-film-control/imdb/form-film-imdb-control"
import {HttpRequestAbstractService} from '../../http-request-service/abstract/http-request-abstract.service';
import {ResultModelAbstract} from '../../../model/result-model/abstract/result-model-abstract';
import {ResultModelIMDB} from '../../../model/result-model/imdb/result-model-imdb';
import { from, Observable } from 'rxjs';
import 'rxjs-compat';




// служба для платформы IMDB
@Injectable({
  providedIn: 'root'
})
export class ImdbPlatformService implements PlatformAbstractService {
  
    
  // searchModel - служба для поиск0а моделей
  constructor(public searchModel:SearhModelAbstractService
            , public _resultFilmModel:ResultModelAbstract
            , public httpserver: HttpRequestAbstractService) {
  }  

  //#region информация о платформе
  // имя платформы
  public nameOfPlatform: string = "IMDB Platform";

  // текстовое отображение параметров поиска
  public ListOfParametersToSearch: ParameterItem[] = [
    new ParameterItem ("Name of Film"),
    new ParameterItem ("Year of film creation")
  ];
  //#endregion
  

  // #region getFilms

  // кэш для фильмов, чтобы не лазить на сервер, если запрос уже был
  cacheCollectoin: Array<FilmModelIMDB[]>; 


    HasFilmCollectionFromCache (page: string) : boolean {
     if (this.cacheCollectoin[Number(page) - 1] === undefined) {
      return false;
    }    
    return true; 
  }       
 //   Получение коллекции фильмов для отображения
 // page - постраничный поиск внутри коллекции (если передается страница, то возможно извлечение коллекции из кеша)
  GetResultCollection (page?:string): Observable<ResultModelAbstract> {
    // проверка ведется ли поиск внутри коллекции
    let isNeedCasheSearch: boolean = (page !== undefined) ? true: false;
    if (isNeedCasheSearch)
    {
        // проверка есть ли текущая страница в кеше 
        if (this.HasFilmCollectionFromCache(page)) {
          console.log ("Extract collection from the cache");
          this._resultFilmModel.currentFilmCollectionForView = this.cacheCollectoin[Number(page) - 1];
          return Observable.of(this._resultFilmModel);
        }
    }
    // делаем запрос к серверу
      if (page === undefined){
        this.cacheCollectoin = new Array<FilmModelIMDB[]>();
        page = "1";
      }
      this.fillQueryStringFromForm(page); 
      console.log ("Get collection from the server page: " + page);
      return this.httpserver.Get(this.queryString)
                    .map(item=> JSON.parse(item.Data) )
                    .map(dataitem => {
                      this._resultFilmModel.isValidAnswerFromServer = dataitem.Response;
                      this._resultFilmModel.currentFilmCollectionForView = dataitem.Search;
                      this._resultFilmModel.totalcountOfFilmsByKeyword = dataitem.totalResults;
                      this.cacheCollectoin[Number(page) - 1] = dataitem.Search;
                      return this._resultFilmModel;
                    });
  }

  DetailFilm : FilmModelIMDB = new FilmModelIMDB();
  
  GetDetailFilm (filmId: string): Observable<FilmModelIMDB> {
    
    return this.httpserver.GetDetail (filmId)
                          .map(item=> JSON.parse(item.Data))
                          .map (dataitem => {
                            console.log(dataitem);
                            this.DetailFilm = dataitem;
                              return this.DetailFilm;
                          });

  }

   


// Форма для поиска под конкретную платформу (imdb)
form: FormFilmIMDBGroup = new FormFilmIMDBGroup();
queryString : SearchParameter[];

  fillQueryStringFromForm(page?: string) {
    page = page || "1";
    this.queryString = new Array<SearchParameter>();
    this.form.FormFilmControls.forEach(formcontrol => {
     this.queryString.push(new SearchParameter(formcontrol._property, formcontrol.value));
   });
   this.queryString.push(new SearchParameter("page", page));
 }
 


}


export class SearchParameter {

  constructor (public name: string, public value: string) {}
 

  }




