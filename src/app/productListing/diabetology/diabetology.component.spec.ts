import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetologyComponent } from './diabetology.component';

describe('DiabetologyComponent', () => {
  let component: DiabetologyComponent;
  let fixture: ComponentFixture<DiabetologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
