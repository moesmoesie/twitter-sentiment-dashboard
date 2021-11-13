import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsCardComponent } from './keywords-card.component';

describe('KeywordsCardComponent', () => {
  let component: KeywordsCardComponent;
  let fixture: ComponentFixture<KeywordsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
