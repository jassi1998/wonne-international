import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroenterologyComponent } from './gastroenterology.component';

describe('GastroenterologyComponent', () => {
  let component: GastroenterologyComponent;
  let fixture: ComponentFixture<GastroenterologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastroenterologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastroenterologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
