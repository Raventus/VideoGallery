
import { Injectable } from '@angular/core';


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
}
