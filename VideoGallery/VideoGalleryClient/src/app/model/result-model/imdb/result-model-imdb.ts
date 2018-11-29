import {FilmModelIMDB} from '../../film-model/imdb/film-model-imdb'
import {ResultModelAbstract, CasheOfResults} from '../abstract/result-model-abstract';
import {HttpRequestAbstractService} from '../../../services/http-request-service/abstract/http-request-abstract.service'

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultModelIMDB implements ResultModelAbstract {
    

    filmRequestCollection : FilmModelIMDB[];    
    countOfFilms: number;
    isValid: boolean;
    casheFilmCollection: CasheOfResults;

 

    getFilmCollectionFromCashe (key:string, page:string):  FilmModelIMDB[] {
      this.casheFilmCollection.keyWord = key;
      if (this.casheFilmCollection.allPageFilmCollection[page].length > 0 )
        return this.casheFilmCollection.allPageFilmCollection[page];
      else 
        return null;
    }


    
}
