import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalInformationStep1Component } from './personal-information-step-1.component';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('PersonalInformationStep1Component', () => {
  let component: PersonalInformationStep1Component;
  let fixture: ComponentFixture<PersonalInformationStep1Component>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalInformationStep1Component],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore({})],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(PersonalInformationStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});






