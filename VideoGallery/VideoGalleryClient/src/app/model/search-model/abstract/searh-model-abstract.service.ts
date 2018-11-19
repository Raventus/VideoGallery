import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class SearhModelAbstractService {
  filmName: string;
  yearOfCreation: string;
  constructor() { }
}
