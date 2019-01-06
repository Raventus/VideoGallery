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

  ngOnInit() {
  }

  constructor() {  
  }
}
