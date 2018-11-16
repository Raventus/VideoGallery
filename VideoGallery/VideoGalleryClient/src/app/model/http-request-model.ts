import { Injectable, Inject, InjectionToken  } from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs-compat';
import {HttpClient, HttpParams } from '@angular/common/http';

import {SearhModelAbstractService} from "./search-model/abstract/searh-model-abstract.service";

export const REQUEST_URL = new InjectionToken ("request_url");


@Injectable()
export class HttpRequestServer {

    constructor (private http: HttpClient, @Inject(REQUEST_URL) private url: string, private  _searchModel: SearhModelAbstractService){
        console.log (url);
    
    }
    
    Get(): Observable<any> {
        let parameters = new HttpParams().set('filmName', this._searchModel.filmName);
        console.log (this._searchModel.filmName);
        return this.http.get(this.url, {params: parameters});
    }



   /* private sendRequest (verb: RequestMethod, url: string, parameters?: HttpParams): Observable<any> {   
        return this.http.request(new Request ({
            method: verb,
            url: url,
            params: parameters
        })).map(response=>response.json());
    }*/
}