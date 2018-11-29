import {FilmModelAbstract} from '../../film-model/abstract/film-model-abstract'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultModelAbstract {
    
    // коллекция фильмов возвращаемая запросом
    filmRequestCollection: FilmModelAbstract[];

    // количество фильмов по запросу
    countOfFilms: number;

    // валидный ли результат
    isValid: boolean;


}
