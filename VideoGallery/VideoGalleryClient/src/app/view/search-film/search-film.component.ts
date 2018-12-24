import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Router , Event, NavigationStart, NavigationEnd} from "@angular/router";
import {PlatformAbstractService, ParameterItem} from '../../services/platform-service/abstract/platform-abstract.service';
import {SearhModelAbstractService} from '../../model/search-model/abstract/searh-model-abstract.service';
//import {HttpRequestServer} from '../../model/http-request-model';
import { NgForm, ReactiveFormsModule  } from "@angular/forms";
import {LoaderService} from '../../services/additional/loader';


@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css', '../../app.component.css']
})
export class SearchFilmComponent implements OnInit {

   errorMessage: string;

   //  is form  try to sumbitting
   formSubmitted: boolean;

  // _platform - current platform to serach films
  constructor(private router: Router, public _platform :PlatformAbstractService, private loader: LoaderService) { 
    
  }

  // form submit function and navigate to viewFilms
  DoSearch(form: NgForm)
  {
    this.formSubmitted = true;
    if (form.valid) {

      this._platform.GetResultCollection().subscribe(response => {

        if (response.isValidAnswerFromServer) {     
          this.router.navigateByUrl("viewFilms"); 

        }
      });
      this.formSubmitted = false;
    }
    else {
      this.errorMessage = "Form Data Invalid";
    }
  }

  ngOnInit() {

  }
 

}
