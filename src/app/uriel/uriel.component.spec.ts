import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrielComponent } from './uriel.component';

describe('UrielComponent', () => {
  let component: UrielComponent;
  let fixture: ComponentFixture<UrielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
