import {FormControl, FormGroup, Validators} from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

export class FormFilmIMDBControl extends FormControl {
    _name: string;
    _property: string;
    _placeholder: string

    constructor (name: string, property:string, placeholder: string, value: any, validator: any) {
        super (value, validator);
        this._name = name;
        this._property = property;
        this._placeholder = placeholder;
    }

      // function to return the mistake string of one form element
  getValidationMessage () {
    let messages: string[] = [];
    if (this.errors) {
        for (let errorName in this.errors) {
          switch (errorName) {
            case "required":
              messages.push (`You must enter a ${this._name}`);
              break;
            case "minlength":
              messages.push (`A ${this._name} must be at least ${this.errors['minlength'].requiredLength} characters`);
              break;
            case 'pattern':
              messages.push(`The ${this._name} contains illegal characters`);
              break;
          }
        }
    }
    return messages;
  }
}

export class FormFilmIMDBGroup extends FormGroup {
    constructor () {
        super ({
          filmName: new FormFilmIMDBControl ("Film name", "filmName", "enter a film name", ""
            , Validators.compose ([Validators.required, Validators.pattern("^[а-яА-ЯёЁa-zA-Z0-9- ]{4,}$")])),

            year: new FormFilmIMDBControl ("Year of creation", "year", "enter a year of creation", "", Validators.pattern("^[12][0-9]{3}$"))
            
        })
    }

        get FormFilmControls(): FormFilmIMDBControl[] {
            return Object.keys(this.controls).map (control=> this.controls[control] as FormFilmIMDBControl);
        }

        
    // function to return the mistake string of all form element
  getFormValidationMessages (form: any): string[] {
      let messages : string[] = [];
      this.FormFilmControls.forEach(control => control.getValidationMessage().forEach(mistake => messages.push(mistake)));  
      return messages;
    }
  }
    
