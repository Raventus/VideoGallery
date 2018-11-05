import { Component, OnInit } from '@angular/core';
import {PlatformModelAbstract, ParameterItem} from '../model/platform-model/abstract/platform-model-abstract';



@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],

})
export class GreetingsComponent implements OnInit {

  constructor(private _platform :PlatformModelAbstract) { }
  
  ngOnInit() {
  }

  getNameOfPlatform (): string {
    return this._platform.nameOfPlatform;
  }
  getListOfPlatformParameters() : ParameterItem[] {
    return this._platform.ListOfParametersToSearch;
  } 
}
