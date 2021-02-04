import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalCareComponent } from './critical-care.component';

describe('CriticalCareComponent', () => {
  let component: CriticalCareComponent;
  let fixture: ComponentFixture<CriticalCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
