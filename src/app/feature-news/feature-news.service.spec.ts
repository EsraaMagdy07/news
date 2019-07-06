import { TestBed } from '@angular/core/testing';

import { FeatureNewsService } from './feature-news.service';

describe('FeatureNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureNewsService = TestBed.get(FeatureNewsService);
    expect(service).toBeTruthy();
  });
});
