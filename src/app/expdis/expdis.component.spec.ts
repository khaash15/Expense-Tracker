import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpdisComponent } from './expdis.component';

describe('ExpdisComponent', () => {
  let component: ExpdisComponent;
  let fixture: ComponentFixture<ExpdisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpdisComponent]
    });
    fixture = TestBed.createComponent(ExpdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
