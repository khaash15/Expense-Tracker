import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display2Component } from './display2.component';

describe('Display2Component', () => {
  let component: Display2Component;
  let fixture: ComponentFixture<Display2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Display2Component]
    });
    fixture = TestBed.createComponent(Display2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
