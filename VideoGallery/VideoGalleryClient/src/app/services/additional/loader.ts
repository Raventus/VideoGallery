import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
 
    public ShowIndicator: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

    display (value: boolean) {
        this.ShowIndicator.next(value);
        console.log (value);
    }
}