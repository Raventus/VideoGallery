import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs-compat';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchParameter } from '../../platform-service/imdb/imdb-platform-model.service';
import { FilmModelIMDB } from "src/app/model/film-model/imdb/film-model-imdb";

export const REQUESTURLIMDB = new InjectionToken("request_url");

@Injectable({
  providedIn: 'root'
})
export class HttpRequestImdbService {

  httpHelper: httpHelperIMDB;

  constructor(private http: HttpClient
    , @Inject(REQUESTURLIMDB) private url: string) {

      this.httpHelper = new httpHelperIMDB (this.url);
  }

  Get(searchParameter: SearchParameter[]): Observable<any> {

    return this.http.get(this.url, { params: this.httpHelper.GetParamsForViewFilmCollectionQuery(searchParameter) });
  }


  GetDetail(filmId: string): Observable<any> {

    return this.http.get(this.httpHelper.GetUrlStringForDetailFilmQuery(filmId));
  }

}

class httpHelperIMDB {
  
  constructor (private url:string) {
  }

  GetUrlStringForDetailFilmQuery (filmId: string) :string {

    return this.url + filmId; 
  }

  GetParamsForViewFilmCollectionQuery (searchParameter: SearchParameter[]): HttpParams {

    let parameters = new HttpParams();

    for (var i = 0; i < searchParameter.length; i++) {

      if (searchParameter[i].value == undefined) {
        continue;
      }
      parameters = parameters.append(searchParameter[i].name, searchParameter[i].value);
    }

    return parameters;
  }

}
