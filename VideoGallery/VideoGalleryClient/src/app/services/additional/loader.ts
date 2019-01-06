import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
 
    private loaderSubject = new Subject<LoaderState>();
    loaderState = this.loaderSubject.asObservable();
    public ShowIndicator: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    show() {

        this.loaderSubject.next(<LoaderState>{ show: true });
    }


    hide() {

        this.loaderSubject.next(<LoaderState>{ show: false });
    }

    display (value: boolean) {
        
        this.ShowIndicator.next(value);
    }
}


export interface LoaderState {

    show: boolean;
  }