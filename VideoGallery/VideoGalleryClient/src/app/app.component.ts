import { Component, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './services/additional/loader';
import {Router, NavigationStart, NavigationEnd, RouterEvent, Event} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoGalleryClient';
  isShowIndicator: boolean = true;

  constructor (private _router: Router, private loader: LoaderService, public cd: ChangeDetectorRef) {
    this._router.events.subscribe(( routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        console.log ("true from route");
        this.isShowIndicator = true;
      }
      else if (routerEvent instanceof NavigationEnd) {
        console.log ("false from route");
        this.isShowIndicator = false;
      }
      this.cd.detectChanges();
    });
    this.loader.ShowIndicator.subscribe (element => {
      console.log ("Show Indicator " + `${element}`);
      this.isShowIndicator = element;
      this.cd.detectChanges();
    });
  }
}
