import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonneIndiaComponent } from './wonne-india.component';

describe('WonneIndiaComponent', () => {
  let component: WonneIndiaComponent;
  let fixture: ComponentFixture<WonneIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonneIndiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonneIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
