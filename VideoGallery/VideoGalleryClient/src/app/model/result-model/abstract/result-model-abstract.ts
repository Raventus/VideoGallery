import {FilmModelAbstract} from '../../film-model/abstract/film-model-abstract'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class  ResultModelAbstract {

    // коллекция фильмов возвращаемая запросом
    filmRequestCollection: FilmModelAbstract[];

    // количество фильмов по запросу
    countOfFilms: number;

    // валидный ли результат
    isValid: boolean;
    abstract getFilmCollectionFromCashe (key:string, page:string):  FilmModelAbstract[];
    // кэширование результатов по страницам
    casheFilmCollection: CasheOfResults;
}

export class CasheOfResults {
  //ключевое поля для поиска
  private _keyWord: string;
  // постраничная коллекция фильмов
  allPageFilmCollection: PageResult[];

  get keyWord() :string {
    return this._keyWord;
  }
  // при изменение ключевого слово очищать кэш
  set keyWord (newValue:string) {
    if (this._keyWord !== newValue) {
      for (var i=0; i < this.allPageFilmCollection.length; i++){
        this.allPageFilmCollection[i].PageFilmCollection.splice (0, this.allPageFilmCollection[i].PageFilmCollection.length);
      }
      this._keyWord = newValue;
    }
  }






}
export class PageResult {
  numberOfPage: Number;
  PageFilmCollection: FilmModelAbstract[];
}
