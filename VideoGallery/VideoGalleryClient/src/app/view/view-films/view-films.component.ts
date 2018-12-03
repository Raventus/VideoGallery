import { Component, OnInit } from '@angular/core';
import { FilmModelIMDB } from '../../model/film-model/imdb/film-model-imdb';
import { PlatformAbstractService } from '../../services/platform-service/abstract/platform-abstract.service';
import 'rxjs-compat';
import { from, Observable } from 'rxjs';


import { ResultModelIMDB } from '../../model/result-model/imdb/result-model-imdb';
import { ResultModelAbstract } from '../../model/result-model/abstract/result-model-abstract';



@Component({
  selector: 'app-view-films',
  templateUrl: './view-films.component.html',
  styleUrls: ['./view-films.component.css']
})
export class ViewFilmsComponent implements OnInit {

  ngOnInit() {
  }

  private pageSizer: Number;
  private selectedPage: number = 1;
  _resultSearch: ResultModelAbstract = new ResultModelIMDB();

  constructor(private _platform: PlatformAbstractService) {
    this.pageSizer = _platform.GetCountOfPages();
    this._platform.GetResultCollection().subscribe(
      collection => this._resultSearch = collection
    );
    console.log(this._resultSearch);
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;

    this._platform.GetResultCollection(this.selectedPage.toString()).subscribe(

      collection => {
        this._resultSearch = collection;
      }
    )
  }

  get PageNumbers(): number[] {
    return Array(this.pageSizer).fill(0).map((x, i) => i + 1);
  }
}

