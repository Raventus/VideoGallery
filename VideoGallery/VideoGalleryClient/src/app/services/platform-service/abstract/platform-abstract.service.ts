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

     
     public abstract nameOfPlatform: string; // имя платформы 
     public abstract ListOfParametersToSearch: ParameterItem[]; // список параметров для поиска (текстовый)
     cacheCollectoin: Array<FilmModelAbstract[]>;
     public abstract HasFilmCollectionFromCache(page: string): boolean;

    constructor(public searchModel: SearhModelAbstractService
        , public _resultFilmModel: ResultModelAbstract
        , public httpserver: HttpRequestAbstractService) {
    }

    public abstract GetResultCollection(page?: string): Observable<ResultModelAbstract>;

    public abstract GetDetailFilm(filmId: string): Observable<FilmModelAbstract>;




}


// текстовое представление параметра для поиска
export class ParameterItem {
     
    parameterName: string; // имя параметра

    constructor(name: string) {
        
        this.parameterName = name;
    }
}