import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlatformAbstractService} from '../../services/platform-service/abstract/platform-abstract.service';

import {ResultModelAbstract} from '../../model/result-model/abstract/result-model-abstract';
import {ResultModelIMDB} from '../../model/result-model/imdb/result-model-imdb';
import { FilmModelAbstract } from 'src/app/model/film-model/abstract/film-model-abstract';
import { FilmModelIMDB } from 'src/app/model/film-model/imdb/film-model-imdb';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css', '../../app.component.css']
})
export class DetailFilmComponent implements OnInit {

   filmId: string;
   viewModel: FilmModelAbstract = new FilmModelIMDB();
  constructor(private platform:PlatformAbstractService, actRoute: ActivatedRoute) { 
    this.filmId = actRoute.snapshot.params["filmID"];
    platform.GetDetailFilm(this.filmId).subscribe(data=>{
      this.viewModel = data;
      console.log ("imdbID " + this.viewModel.imdbID);   
    });
  }

  ngOnInit() {

  }
 

}