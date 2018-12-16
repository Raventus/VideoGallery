import {FilmModelAbstract} from '../abstract/film-model-abstract'


// класс для представления фильма для платформы IMDB
export  class FilmModelIMDB implements FilmModelAbstract{
  imdbRating: string;
  Type: string;
  Released: string;
  Genre: string;
  Rated: string;
  Website: string;
  BoxOffice: string;
  DVD: string;
  imdbVotes: string;
  Country: string;
  Actors: string;
  Avards: string;
  imdbID:string;
  Ratings: string;
    // название
    Title: string;
    // год публикации
    Year: string;
    // постер
    Poster: string;
    
    _imdbID: string;
    // ссылка на источник
    get Reference(): string {
        return this._imdbID;
    }

    set Reference(newValue: string) {
      this._imdbID = this.hostURL + newValue;
    }

    // добавляется к ссылке, если она отнасительная
  hostURL: string = "https://www.imdb.com/title/";

  Plot: string;
  Writer: string;
  Director: string;
  Runtime: string;

  }