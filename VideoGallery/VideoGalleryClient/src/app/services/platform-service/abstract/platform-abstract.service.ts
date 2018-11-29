import { Injectable } from '@angular/core';
import {SearhModelAbstractService} from '../../../model/search-model/abstract/searh-model-abstract.service';
import {FilmModelAbstract} from '../../../model/film-model/abstract/film-model-abstract';
import {ResultModelAbstract} from '../../../model/result-model/abstract/result-model-abstract'
// текстовое представление параметра для поиска
export class ParameterItem {
    // имя параметра 
    parameterName : string;
    
    constructor (name: string) {
        this.parameterName = name;
    }
  }

  // абстрактный сервис для предоставления платформы поиска
@Injectable()
export abstract class  PlatformAbstractService {

     // имя платформы
     public abstract nameOfPlatform : string;

     _resultSearch: ResultModelAbstract; 

    // список параметров для поиска (текстовый)
    public abstract ListOfParametersToSearch: ParameterItem [];
   
    FilmCollection: FilmModelAbstract[];
    
    // абстрактный метод для предоставления службы поиска фильмов
    public abstract GetSearchModel () :SearhModelAbstractService;

    // адрес хоста, если ссылка относительная
    public hostURL: string;

    public abstract doPlatformSearch ();

    
}