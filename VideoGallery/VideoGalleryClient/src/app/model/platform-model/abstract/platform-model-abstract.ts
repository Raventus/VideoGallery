
import { Injectable } from '@angular/core';
import {SearhModelAbstractService} from '../../search-model/abstract/searh-model-abstract.service';

// текстовое представление параметра для поиска
export class ParameterItem {
    parameterName : string;
    constructor (name: string) {
        this.parameterName = name;
    }
  }

  // абстрактный сервис для предоставления платформы поиска
@Injectable()
export abstract class  PlatformModelAbstract {

    // список параметров для поиска (текстовый)
    public abstract ListOfParametersToSearch: ParameterItem [];
    // имя платформы
    public abstract nameOfPlatform : string;
    // абстрактный метод для предоставления службы поиска фильмов
    public abstract GetSearchModel () :SearhModelAbstractService;

    // адрес хоста, если ссылка относительная
    public hostURL: string;
    
}