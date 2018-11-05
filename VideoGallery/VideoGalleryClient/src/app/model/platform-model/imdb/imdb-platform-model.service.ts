import { Injectable } from '@angular/core';
import {PlatformModelAbstract, ParameterItem} from '../abstract/platform-model-abstract';
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

  constructor() { 
  }
}
