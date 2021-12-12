import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordSectionComponent } from './keyword-section.component';

describe('KeywordSectionComponent', () => {
  let component: KeywordSectionComponent;
  let fixture: ComponentFixture<KeywordSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
