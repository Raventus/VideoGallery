import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService, LoaderState } from 'src/app/services/additional/loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  
  show:boolean = false;
  private subscription: Subscription;

  ngOnInit() {

    this.subscription = this.loaderService.loaderState.subscribe(
      (state: LoaderState) => {
      this.show = state.show;
    });
  }

  constructor(private loaderService: LoaderService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
