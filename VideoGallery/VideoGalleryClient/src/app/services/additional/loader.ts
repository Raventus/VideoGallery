import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
 
    public ShowIndicator: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

    display (value: boolean) {
        this.ShowIndicator.next(value);
    }
}