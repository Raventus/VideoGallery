import {FilmModelAbstract} from '../../film-model/abstract/film-model-abstract';
import { from, Observable } from 'rxjs';
import 'rxjs-compat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class  ResultModelAbstract {

    // коллекция фильмов возвращаемая запросом
    currentFilmCollectionForView: FilmModelAbstract[];
 

    // количество фильмов по запросу
    totalcountOfFilmsByKeyword: number;  

    // валидный ли результат
    isValidAnswerFromServer: boolean;     
}





