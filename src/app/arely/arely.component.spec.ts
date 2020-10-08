import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArelyComponent } from './arely.component';

describe('ArelyComponent', () => {
  let component: ArelyComponent;
  let fixture: ComponentFixture<ArelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArelyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
