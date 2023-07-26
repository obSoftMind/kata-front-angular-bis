import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecapPageStep3Component } from './recap-page-step-3.component';

import { provideMockStore } from '@ngrx/store/testing';


describe('RecapPageStep3Component', () => {
  let component: RecapPageStep3Component;
  let fixture: ComponentFixture<RecapPageStep3Component>;

  beforeEach(
     () => {

       TestBed.configureTestingModule({
        declarations: [RecapPageStep3Component],
        providers: [provideMockStore({})],
      });


      fixture = TestBed.createComponent(RecapPageStep3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
