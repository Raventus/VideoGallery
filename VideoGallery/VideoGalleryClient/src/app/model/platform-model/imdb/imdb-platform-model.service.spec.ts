import { TestBed, inject } from '@angular/core/testing';

import { ImdbPlatformModelService } from './imdb-platform-model.service';

describe('ImdbPlatformModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImdbPlatformModelService]
    });
  });

  it('should be created', inject([ImdbPlatformModelService], (service: ImdbPlatformModelService) => {
    expect(service).toBeTruthy();
  }));
});
