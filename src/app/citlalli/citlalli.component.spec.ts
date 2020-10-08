import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitlalliComponent } from './citlalli.component';

describe('CitlalliComponent', () => {
  let component: CitlalliComponent;
  let fixture: ComponentFixture<CitlalliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitlalliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitlalliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
