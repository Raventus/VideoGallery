import { Injectable, Inject, InjectionToken  } from "@angular/core";
import {Http, Request, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {FilmModelAbstract} from "./film-model/abstract/film-model-abstract";
import 'rxjs-compat';
import {SearhModelAbstractService} from "./search-model/abstract/searh-model-abstract.service";

export const REQUEST_URL = new InjectionToken ("request_url");

@Injectable()
export class HttpRequestServer {

    constructor (private http: Http, @Inject(REQUEST_URL) private url: string, private  _searchModel: SearhModelAbstractService){
    
    }
    
    Get(): Observable<FilmModelAbstract> {
        return this.sendRequest(RequestMethod.Get, this.url+this._searchModel.nameOfFilm);
    }



    private sendRequest (verb: RequestMethod, url: string, body?: SearhModelAbstractService): Observable<FilmModelAbstract> {
        return this.http.request(new Request ({
            method: verb,
            url: url,
            body: body
        })).map(response=>response.json());
    }
}