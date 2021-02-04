import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergicsComponent } from './allergics.component';

describe('AllergicsComponent', () => {
  let component: AllergicsComponent;
  let fixture: ComponentFixture<AllergicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
