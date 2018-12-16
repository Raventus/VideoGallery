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
 
  Ratings: string;
    // название
    Title: string;
    // год публикации
    Year: string;
    // постер
    Poster: string;
  




    get imdbID ():string {
      return  this._imdbID; 
    }

    set imdbID(newValue:string) {
      this._imdbID = newValue;
      this.Reference = this.hostURL + newValue;
      console.log (this.Reference );
    }

    _imdbID: string ;
    _reference: string ;
    get Reference ():string {
      return this._reference;
    }

    set Reference (newValue:string){
      console.log ("report from set");
      this._reference = this.hostURL + newValue;
    }
    //ссылка на источник
    // get Reference(): string {
    //     return this._imdbID;
    // }
    // set Reference(newValue: string) {
    //   this._imdbID = this.hostURL + newValue;
    // }


  

    // добавляется к ссылке, если она отнасительная
  hostURL: string = "https://www.imdb.com/title/";

  Plot: string;
  Writer: string;
  Director: string;
  Runtime: string;

  }