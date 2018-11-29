import { Injectable } from '@angular/core';
import {SearhModelAbstractService} from '../../../model/search-model/abstract/searh-model-abstract.service';
import {FilmModelAbstract} from '../../../model/film-model/abstract/film-model-abstract';
import {ResultModelAbstract} from '../../../model/result-model/abstract/result-model-abstract'
import 'rxjs-compat';
import { from, Observable } from 'rxjs';

  // абстрактный сервис для предоставления платформы поиска
@Injectable()
export abstract class  PlatformAbstractService {

    constructor() {}
     // имя платформы
     public abstract nameOfPlatform : string;

     _resultSearch: ResultModelAbstract; 

    // список параметров для поиска (текстовый)
    public abstract ListOfParametersToSearch: ParameterItem [];
   
    
    
    // абстрактный метод для предоставления службы поиска фильмов
    public abstract GetSearchModel () :SearhModelAbstractService;

 

    public abstract doPlatformSearch (page: string): Observable<ResultModelAbstract>;

    
}


// текстовое представление параметра для поиска
export class ParameterItem {
    // имя параметра 
    parameterName : string;
    
    constructor (name: string) {
        this.parameterName = name;
    }
  }