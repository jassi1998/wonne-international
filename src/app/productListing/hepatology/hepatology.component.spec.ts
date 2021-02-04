import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HepatologyComponent } from './hepatology.component';

describe('HepatologyComponent', () => {
  let component: HepatologyComponent;
  let fixture: ComponentFixture<HepatologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HepatologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HepatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
