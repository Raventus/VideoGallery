import { TestBed, inject } from '@angular/core/testing';

import { ImdbPlatformService } from './imdb-platform-model.service';

describe('ImdbPlatformModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImdbPlatformService]
    });
  });

  it('should be created', inject([ImdbPlatformService], (service: ImdbPlatformService) => {
    expect(service).toBeTruthy();
  }));
});
