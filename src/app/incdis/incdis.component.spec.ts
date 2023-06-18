import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncdisComponent } from './incdis.component';

describe('IncdisComponent', () => {
  let component: IncdisComponent;
  let fixture: ComponentFixture<IncdisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncdisComponent]
    });
    fixture = TestBed.createComponent(IncdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
