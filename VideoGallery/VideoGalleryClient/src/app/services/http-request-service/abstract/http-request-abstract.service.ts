import { Injectable, Inject, InjectionToken  } from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs-compat';
import {HttpClient} from '@angular/common/http';
import {SearchParameter} from '../../platform-service/imdb/imdb-platform-model.service'

export const REQUESTURL = new InjectionToken ("request_url");

@Injectable({
  providedIn: 'root'
})
export abstract class HttpRequestAbstractService {

  constructor (private http: HttpClient, @Inject(REQUESTURL) private url: string){
  }

  abstract Get(searchParameter: SearchParameter[]): Observable<any>;

  abstract GetDetail(filmID: string): Observable<any>;
}
