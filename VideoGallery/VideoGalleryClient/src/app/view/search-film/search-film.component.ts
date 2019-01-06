import { Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import { PlatformAbstractService, ParameterItem } from '../../services/platform-service/abstract/platform-abstract.service';
import { NgForm, ReactiveFormsModule } from "@angular/forms";
import { LoaderService } from '../../services/additional/loader';


@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css', '../../app.component.css']
})
export class SearchFilmComponent implements OnInit {

  errorMessage: string;
  formSubmitted: boolean; //  is form  try to sumbitting

  ngOnInit() {
  }

  // _platform - current platform to serach films
  constructor(private router: Router
    , public _platform: PlatformAbstractService
    , private loader: LoaderService) {
  }

  // form submit function and navigate to viewFilms
  DoSearch(form: NgForm) {

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

}
