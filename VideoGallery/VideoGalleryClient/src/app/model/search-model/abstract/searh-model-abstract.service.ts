import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class SearhModelAbstractService {
  filmName: string ="Fast and Furious" 
  yearOfCreation: string;
  constructor() { }
}
