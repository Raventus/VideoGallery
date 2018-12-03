import {FilmModelIMDB} from '../../film-model/imdb/film-model-imdb'
import {ResultModelAbstract} from '../abstract/result-model-abstract';
import {HttpRequestAbstractService} from '../../../services/http-request-service/abstract/http-request-abstract.service'
import { from, Observable } from 'rxjs';
import 'rxjs-compat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultModelIMDB implements ResultModelAbstract {
  
  totalcountOfFilmsByKeyword: number;  
  isValidAnswerFromServer: boolean; 
  currentFilmCollectionForView: FilmModelIMDB[];
       
}


