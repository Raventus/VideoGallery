import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class SearhModelAbstractService {
  nameOfFilm: string = 'Godfather';
  yearOfCreation: number = 1973;
  constructor() { }
}
