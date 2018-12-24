import { Component, ChangeDetectorRef, OnInit, ApplicationRef } from '@angular/core';
import { LoaderService } from './services/additional/loader';
import { Router, RouterModule, NavigationStart, NavigationEnd, RouterEvent, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  isShowIndicator: boolean = true;

  constructor(private app: ApplicationRef, private _router: Router, private loader: LoaderService, public cd: ChangeDetectorRef) {

    this.GetLoadingState().subscribe(element => {
      console.log("Show Indicator Obsrvable " + `${element}`);
      // this.isShowIndicator = element;
      console.log("Show Indicator Obsrvable " + this.isShowIndicator);
    })

    // this._router.events.subscribe((routerEvent: Event) => {
    //   if (routerEvent instanceof NavigationStart) {

    //     this.isShowIndicator = true;
    //     // this.sleep (5);
    //     console.log("true from route The value of isShowIndicator  " + this.isShowIndicator);
    //   }

    //   else if (routerEvent instanceof NavigationEnd) {
    //     // this.sleep (5);
    //     this.isShowIndicator = false;
    //     console.log("false from route The value of isShowIndicator  " + this.isShowIndicator);


    //   }
    // });

    this.loader.ShowIndicator.subscribe(element => {
      console.log("Show Indicator " + `${element}`);
      this.isShowIndicator = element;
      console.log("Show Indicator " + this.isShowIndicator);
    });
  }

  ngOnInit () {
    this._router.events.pipe(
      filter(event => event instanceof NavigationStart)
  ).subscribe(() => {
    this.isShowIndicator = true;
    this.app.tick(); 
    
    console.log("true from route The value of isShowIndicator  " + this.isShowIndicator);
  });
  this._router.events.pipe(
    filter(event => event instanceof NavigationEnd)
).subscribe(() => {
  this.sleep (5);
  //this.isShowIndicator = false;
  
  console.log("false from route The value of isShowIndicator  " + this.isShowIndicator);
});
  }

  GetLoadingState(): Observable<boolean> {

    return this.loader.ShowIndicator.asObservable();

  }

  sleep(seconds) {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) { }
  }


  toggle() {
    
    this.isShowIndicator = !this.isShowIndicator;
    console.log("toogle" + this.isShowIndicator);
  }
}
