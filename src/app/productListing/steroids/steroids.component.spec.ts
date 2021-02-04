import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteroidsComponent } from './steroids.component';

describe('SteroidsComponent', () => {
  let component: SteroidsComponent;
  let fixture: ComponentFixture<SteroidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteroidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
