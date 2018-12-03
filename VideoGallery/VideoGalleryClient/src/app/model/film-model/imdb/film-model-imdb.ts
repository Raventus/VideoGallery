import {FilmModelAbstract} from '../abstract/film-model-abstract'


// класс для представления фильма для платформы IMDB
export  class FilmModelIMDB implements FilmModelAbstract{
    // название
    Title: string;
    // год публикации
    Year: string;
    // постер
    Poster: string;
    
    _imdbID: string;
    // ссылка на источник
    get imdbID(): string {
        return this._imdbID;
    }

    set imdbID(newValue: string) {
      this._imdbID = this.hostURL + newValue;
    }

    // добавляется к ссылке, если она отнасительная
  hostURL: string = "https://www.imdb.com/title/";

  }