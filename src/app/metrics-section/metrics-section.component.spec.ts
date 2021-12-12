import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsSectionComponent } from './metrics-section.component';

describe('MetricsSectionComponent', () => {
  let component: MetricsSectionComponent;
  let fixture: ComponentFixture<MetricsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
