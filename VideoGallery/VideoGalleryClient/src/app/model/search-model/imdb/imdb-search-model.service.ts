import { Injectable } from '@angular/core';
import {SearhModelAbstractService} from '../abstract/searh-model-abstract.service';

@Injectable({
  providedIn: 'root'
})
export class ImdbSearchModelService implements SearhModelAbstractService {
  nameOfFilm: string = 'Godfather';
  yearOfCreation: number = 1973;
  constructor() { }
}
