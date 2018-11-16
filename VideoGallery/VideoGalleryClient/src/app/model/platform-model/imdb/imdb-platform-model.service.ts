import { Injectable, Inject } from '@angular/core';
import {PlatformModelAbstract, ParameterItem} from '../abstract/platform-model-abstract';
import {SearhModelAbstractService} from '../../search-model/abstract/searh-model-abstract.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbPlatformModelService implements PlatformModelAbstract {
  public nameOfPlatform: string = "IMDB Platform";
  public ListOfParametersToSearch: ParameterItem[] = [
    new ParameterItem ("Name of Film"),
    new ParameterItem ("Year of film creation")
  ];

  constructor(private searchModel:SearhModelAbstractService) { 
  }

  GetSearchModel () :SearhModelAbstractService {
    return this.searchModel;
  }

  hostURL: string = "https://www.imdb.com/title/";
}
