import { Injectable, Inject, InjectionToken  } from "@angular/core";
import {Http, Request, RequestMethod} from "@angular/http";
import {Observable} from "rxjs";
import {FilmModelAbstract} from "./film-model/abstract/film-model-abstract";
import 'rxjs-compat';
import {SearhModelAbstractService} from "./search-model/abstract/searh-model-abstract.service";
import { Headers } from '@angular/http';
export const REQUEST_URL = new InjectionToken ("request_url");

@Injectable()
export class HttpRequestServer {

    constructor (private http: Http, @Inject(REQUEST_URL) private url: string, private  _searchModel: SearhModelAbstractService){
        console.log (url);
    
    }
    
    Get(): Observable<any> {
        let headers = new Headers();
        headers.append('filmName', this._searchModel.filmName); 
        console.log (this._searchModel.filmName);
        return this.sendRequest(RequestMethod.Get, this.url);
    }



    private sendRequest (verb: RequestMethod, url: string, header?: Headers): Observable<any> {   
        return this.http.request(new Request ({
            method: verb,
            url: url,
            headers: header
        })).map(response=>response.json());
    }
}