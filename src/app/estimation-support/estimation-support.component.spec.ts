import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationSupportComponent } from './estimation-support.component';

describe('EstimationSupportComponent', () => {
  let component: EstimationSupportComponent;
  let fixture: ComponentFixture<EstimationSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimationSupportComponent]
    });
    fixture = TestBed.createComponent(EstimationSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
