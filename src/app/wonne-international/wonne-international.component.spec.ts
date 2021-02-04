import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonneInternationalComponent } from './wonne-international.component';

describe('WonneInternationalComponent', () => {
  let component: WonneInternationalComponent;
  let fixture: ComponentFixture<WonneInternationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonneInternationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonneInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
