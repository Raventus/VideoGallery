import { Component, OnInit } from '@angular/core';
import {PlatformAbstractService, ParameterItem} from '../../services/platform-service/abstract/platform-abstract.service';

// Component to greetings users and give him the informatuion about video gallery
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css', '../../app.component.css'],

})
export class GreetingsComponent implements OnInit {

  ngOnInit() {
  }

  // _platform - текущая платформа для поиска фильмов
  constructor(private _platform :PlatformAbstractService) { 
  }
  
// функция возвращающая имя платформы
  getNameOfPlatform (): string {

    return this._platform.nameOfPlatform;
  }

  // функция возвращающая список параметров для поиска для текущей платформы
  getListOfPlatformParameters() : ParameterItem[] {
    
    return this._platform.ListOfParametersToSearch;
  } 
}
