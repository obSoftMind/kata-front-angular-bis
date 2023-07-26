import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectDetailsStep2Component } from './project-details-step-2.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProjectDetailsStep2Component', () => {
  let component: ProjectDetailsStep2Component;
  let fixture: ComponentFixture<ProjectDetailsStep2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailsStep2Component],
      imports:[ReactiveFormsModule],
      providers: [provideMockStore({})]
    });
    fixture = TestBed.createComponent(ProjectDetailsStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
