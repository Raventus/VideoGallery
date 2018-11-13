
import { Injectable } from '@angular/core';
import {SearhModelAbstractService} from '../../search-model/abstract/searh-model-abstract.service';


export class ParameterItem {
    parameterName : string;
    constructor (name: string) {
        this.parameterName = name;
    }
  }

@Injectable()
export abstract class  PlatformModelAbstract {

    public abstract ListOfParametersToSearch: ParameterItem [];
    public nameOfPlatform : string;
    public abstract GetSearchModel () :SearhModelAbstractService;
}
