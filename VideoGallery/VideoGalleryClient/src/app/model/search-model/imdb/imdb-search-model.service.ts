import { Injectable } from '@angular/core';
import {SearhModelAbstractService} from '../abstract/searh-model-abstract.service';

@Injectable({
  providedIn: 'root'
})
export class ImdbSearchModelService implements SearhModelAbstractService {
  filmName: string ="Fast and Furious" ;
  yearOfCreation: string;
  constructor() { }
}
