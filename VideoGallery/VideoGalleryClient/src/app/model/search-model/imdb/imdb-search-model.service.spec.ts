import { TestBed, inject } from '@angular/core/testing';

import { ImdbSearchModelService } from './imdb-search-model.service';

describe('ImdbSearchModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImdbSearchModelService]
    });
  });

  it('should be created', inject([ImdbSearchModelService], (service: ImdbSearchModelService) => {
    expect(service).toBeTruthy();
  }));
});
