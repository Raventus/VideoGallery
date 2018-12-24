import { Injectable, Inject, InjectionToken  } from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs-compat';
import {HttpClient, HttpParams } from '@angular/common/http';
import {SearchParameter} from '../../platform-service/imdb/imdb-platform-model.service';
import {LoaderService} from '../../../services/additional/loader';



export const REQUESTURLIMDB = new InjectionToken ("request_url");

@Injectable({
  providedIn: 'root'
})
export class HttpRequestImdbService  {

  constructor (private http: HttpClient
    , @Inject(REQUESTURLIMDB) private url: string
    ){
    console.log (url);

}

Get(searchParameter: SearchParameter[]): Observable<any> {
    let parameters = new HttpParams();
    for (var i=0; i < searchParameter.length; i++)
    {
      
      if (searchParameter[i].value == undefined) {
        continue;
      }
      console.log (`parameter is ${searchParameter[i].name}  - ${searchParameter[i].value}`);
      parameters = parameters.append(searchParameter[i].name, searchParameter[i].value);
    }
    console.log ("url to connect " + this.url);
    var result =  this.http.get(this.url, {params: parameters});
    return result;
}


GetDetail(filmId:string): Observable<any> {
  var urlToDetailRequest : string = this.url + filmId;
  console.log ("url to connect " + urlToDetailRequest);
  var result =  this.http.get(urlToDetailRequest);
  console.log (result);
  return result;
}




}
