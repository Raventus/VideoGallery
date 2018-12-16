import { Component, OnInit } from '@angular/core';
import { FilmModelIMDB } from '../../model/film-model/imdb/film-model-imdb';
import { PlatformAbstractService } from '../../services/platform-service/abstract/platform-abstract.service';
import 'rxjs-compat';
import { from, Observable } from 'rxjs';
import { Router , Event, NavigationStart, NavigationEnd} from "@angular/router";


import { ResultModelIMDB } from '../../model/result-model/imdb/result-model-imdb';
import { ResultModelAbstract } from '../../model/result-model/abstract/result-model-abstract';
import { LoaderService } from 'src/app/services/additional/loader';
import {FilmModelAbstract} from '../../model/film-model/abstract/film-model-abstract';



@Component({
  selector: 'app-view-films',
  templateUrl: './view-films.component.html',
  styleUrls: ['./view-films.component.css']
})
export class ViewFilmsComponent implements OnInit {

  constructor(private _platform: PlatformAbstractService, private loader: LoaderService, private router: Router) {
   
  }

  ngOnInit() {
    console.log ("ViewFilms OnInit invoke")

    this._platform.GetResultCollection("1").subscribe(
      collection => {
        this._resultSearch = collection;
        this.countOfPage = this.GetCountOfPages (collection.totalcountOfFilmsByKeyword);
        console.log (this.countOfPage);
      } 
      
    );
  }

  private countOfPage: Number;
  private selectedPage: number = 1;
  _resultSearch: ResultModelAbstract = new ResultModelIMDB();

  redirectToDetailOfFilm (filmToDetailRedirect: FilmModelAbstract) {
    console.log ("Do navigation");
    console.log ("detailFilm/" + filmToDetailRedirect.imdbID);
    this.router.navigateByUrl("detailFilm/" + filmToDetailRedirect.imdbID); 
  }

  _filmsPerPage: number = 10;
  // Определение количества страниц для поиска
  GetCountOfPages(filmsCount: number) : number {
    if (filmsCount)
    {
      return Math.ceil(filmsCount / this._filmsPerPage);
    }
    else {
      throw Error("Количество страниц не определено: не объявлено количество фильмов в коллекции");
    }
  }

  
  changePage(newPage: number) {
    this.selectedPage = newPage;

    this._platform.GetResultCollection(this.selectedPage.toString()).subscribe(

      collection => {

        this._resultSearch = collection;
       
      }
    )
  }

  
}

