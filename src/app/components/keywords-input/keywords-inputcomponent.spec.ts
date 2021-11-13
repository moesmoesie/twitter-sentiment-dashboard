import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsInputComponent } from './keywords-input.component';

describe('KeywordsCardComponent', () => {
  let component: KeywordsInputComponent;
  let fixture: ComponentFixture<KeywordsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
