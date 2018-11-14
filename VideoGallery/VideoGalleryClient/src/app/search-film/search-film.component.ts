import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {PlatformModelAbstract, ParameterItem} from '../model/platform-model/abstract/platform-model-abstract';
import {SearhModelAbstractService} from '../model/search-model/abstract/searh-model-abstract.service';
import {HttpRequestServer} from '../model/http-request-model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  public errorMessage: string;

  constructor(private router: Router, private _platform :PlatformModelAbstract, private httpRequest: HttpRequestServer) { }

  getPlatform (): PlatformModelAbstract {
    return this._platform;
  }

  getSearchModel(): SearhModelAbstractService {
    return this._platform.GetSearchModel();
  }
  DoSearch(form: NgForm)
  {
    if (form.valid) {
      console.log(this._platform.GetSearchModel().filmName);
      this.router.navigateByUrl("viewFilms");
    }
    else {
      this.errorMessage = "Form Data Invalid";
    }
  }
  
  ngOnInit() {
    console.log("Init search film component");
  }
 

}
