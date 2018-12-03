import { Injectable } from '@angular/core';
import {SearhModelAbstractService} from '../../../model/search-model/abstract/searh-model-abstract.service';
import {FilmModelAbstract} from '../../../model/film-model/abstract/film-model-abstract';
import {ResultModelAbstract} from '../../../model/result-model/abstract/result-model-abstract'
import {HttpRequestAbstractService} from '../../http-request-service/abstract/http-request-abstract.service';
import 'rxjs-compat';
import { from, Observable } from 'rxjs';

  // абстрактный сервис для предоставления платформы поиска
@Injectable()
export abstract class  PlatformAbstractService {

    constructor(public searchModel:SearhModelAbstractService
        , public _resultFilmModel:ResultModelAbstract
        , public httpserver: HttpRequestAbstractService) {
}  
     // имя платформы
     public abstract nameOfPlatform : string;
    // список параметров для поиска (текстовый)
    public abstract ListOfParametersToSearch: ParameterItem [];
   
    cacheCollectoin: Array<FilmModelAbstract[]>; 
    public abstract HasFilmCollectionFromCache (page: string) : boolean;
    
    
    public abstract GetResultCollection (page?: string): Observable<ResultModelAbstract>;


    public abstract GetCountOfPages () : Number;

    
}


// текстовое представление параметра для поиска
export class ParameterItem {
    // имя параметра 
    parameterName : string;
    
    constructor (name: string) {
        this.parameterName = name;
    }
  }