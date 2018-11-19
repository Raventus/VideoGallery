import {FilmModelAbstract} from '../abstract/film-model-abstract'


// класс для представления фильма для платформы IMDB
export  class FilmModelIMDB implements FilmModelAbstract{
    // название
    Title: string;
    // год публикации
    Year: string;
    // постер
    Poster: string;
    // ссылка на источник
    imdbID: string;

    //isRecent: boolean;
  }