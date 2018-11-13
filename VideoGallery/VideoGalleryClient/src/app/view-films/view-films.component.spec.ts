import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFilmsComponent } from './view-films.component';

describe('ViewFilmsComponent', () => {
  let component: ViewFilmsComponent;
  let fixture: ComponentFixture<ViewFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
