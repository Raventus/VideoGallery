import { Injectable } from '@angular/core';
import {SearhModelAbstractService} from '../abstract/searh-model-abstract.service';


@Injectable({
  providedIn: 'root'
})
export class ImdbSearchModelService implements SearhModelAbstractService {
  filmName: string;
  yearOfCreation: string;
  page: number = 1;
  constructor() { }
 
}


export class SearchParameter {
  name: string;
  value: string;
}