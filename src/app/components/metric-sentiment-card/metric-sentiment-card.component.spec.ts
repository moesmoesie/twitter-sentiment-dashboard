import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricSentimentCardComponent } from './metric-sentiment-card.component';

describe('MetricSentimentCardComponent', () => {
  let component: MetricSentimentCardComponent;
  let fixture: ComponentFixture<MetricSentimentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricSentimentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricSentimentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
