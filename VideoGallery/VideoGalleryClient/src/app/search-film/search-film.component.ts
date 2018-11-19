import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Router } from "@angular/router";
import {PlatformModelAbstract, ParameterItem} from '../model/platform-model/abstract/platform-model-abstract';
import {SearhModelAbstractService} from '../model/search-model/abstract/searh-model-abstract.service';
import {HttpRequestServer} from '../model/http-request-model';
import { NgForm } from "@angular/forms";
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css', '../app.component.css']
})
export class SearchFilmComponent implements OnInit {

   errorMessage: string;

   // bool is form is try to sumbitting
   formSubmitted: boolean;


  // _platform - current platform to serach films
  constructor(private router: Router, private _platform :PlatformModelAbstract, private httpRequest: HttpRequestServer) { }

  // return current platform
  getPlatform (): PlatformModelAbstract {
    return this._platform;
  }
  // return search model of current platform
  getSearchModel(): SearhModelAbstractService {
    return this._platform.GetSearchModel();
  }
  // form submit function 
  DoSearch(form: NgForm)
  {
    this.formSubmitted = true;
    if (form.valid) {
      console.log(this._platform.GetSearchModel().filmName);
      this.router.navigateByUrl("viewFilms");
      this.formSubmitted = false;
    }
    else {
     // form.reset;
      this.errorMessage = "Form Data Invalid";
    }
  }
// function to return the mistake string of all form element
  getFormValidationMessages (form: NgForm): string[] {
    let messages : string[] = [];
    Object.keys(form.controls).forEach (item => {
      this.getValidationMessage (form.controls[item], item).forEach(element => messages.push(element));
        
      });
      return messages;
    }
    // function to return the mistake string of one form element
  getValidationMessage (state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
        for (let errorName in state.errors) {
          switch (errorName) {
            case "required":
              messages.push (`You must enter a ${thing}`);
              break;
            case "minlength":
              messages.push (`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
              break;
            case 'pattern':
              messages.push(`The ${thing} contains illegal characters`);
              break;
          }
        }
    }
    console.log (messages);
    return messages;
  }



  ngOnInit() {
    console.log("Init search film component");
  }
 

}
