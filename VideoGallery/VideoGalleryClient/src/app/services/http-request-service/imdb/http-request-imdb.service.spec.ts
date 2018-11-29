import { TestBed, inject } from '@angular/core/testing';

import { HttpRequestImdbService } from './http-request-imdb.service';

describe('HttpRequestImdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestImdbService]
    });
  });

  it('should be created', inject([HttpRequestImdbService], (service: HttpRequestImdbService) => {
    expect(service).toBeTruthy();
  }));
});
