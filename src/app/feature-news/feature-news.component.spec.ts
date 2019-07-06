import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNewsComponent } from './feature-news.component';

describe('FeatureNewsComponent', () => {
  let component: FeatureNewsComponent;
  let fixture: ComponentFixture<FeatureNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
