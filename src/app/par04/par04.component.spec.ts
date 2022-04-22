import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Par04Component } from './par04.component';

describe('Par04Component', () => {
  let component: Par04Component;
  let fixture: ComponentFixture<Par04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Par04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Par04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
