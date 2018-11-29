import {FilmModelIMDB} from '../../film-model/imdb/film-model-imdb'
import {ResultModelAbstract} from '../abstract/result-model-abstract';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultModelIMDB extends ResultModelAbstract {
    
    filmRequestCollection : FilmModelIMDB[];    
    countOfFilms: number;
    isValid: boolean;

    
}
