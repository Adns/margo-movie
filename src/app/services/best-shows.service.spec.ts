import { TestBed } from '@angular/core/testing';

import { BestShowsService } from './best-shows.service';

describe('BestShowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestShowsService = TestBed.get(BestShowsService);
    expect(service).toBeTruthy();
  });
});
