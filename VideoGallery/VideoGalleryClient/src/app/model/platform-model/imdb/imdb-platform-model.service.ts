import { Injectable, Inject } from '@angular/core';
import {PlatformModelAbstract, ParameterItem} from '../abstract/platform-model-abstract';
import {SearhModelAbstractService} from '../../search-model/abstract/searh-model-abstract.service';
import { from } from 'rxjs';

// служба для платформы IMDB
@Injectable({
  providedIn: 'root'
})
export class ImdbPlatformModelService implements PlatformModelAbstract {
  public nameOfPlatform: string = "IMDB Platform";
  public ListOfParametersToSearch: ParameterItem[] = [
    new ParameterItem ("Name of Film"),
    new ParameterItem ("Year of film creation")
  ];
 // searchModel - служба для поиска моделей
  constructor(private searchModel:SearhModelAbstractService) { 
  }

  // абстрактный класс для предоставления службы модели поиска
  GetSearchModel () :SearhModelAbstractService {
    return this.searchModel;
  }

  hostURL: string = "https://www.imdb.com/title/";
}
