import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as fromEstimationSupport from '../../root-store/estimation-support-store/index';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';

@Component({
  selector: 'project-details-step-2',
  templateUrl: './project-details-step-2.component.html',
  styleUrls: ['./project-details-step-2.component.scss']
})
export class ProjectDetailsStep2Component implements OnInit{

  projectDetailsStep2Form = this.fb.group({
    ownerOrTenant: ['', Validators.required],
    numberOfPeopleInTheHousehold: [null, Validators.required],
    householdIcome: [null, Validators.required],
    propertyArea: [null, Validators.required]
  })    

  constructor(private fb: FormBuilder, private readonly store: Store<fromEstimationSupport.EstimationSupportState>) { }

  ngOnInit(): void {

    

     this.projectDetailsStep2Form.valueChanges
     .pipe(
      filter(() => this.projectDetailsStep2Form.valid)
     ).subscribe(() => {
        const ownerOrTenant = this.projectDetailsStep2Form.value.ownerOrTenant;
        const numberOfPeopleInTheHousehold = this.projectDetailsStep2Form.value.numberOfPeopleInTheHousehold;
        const householdIcome = this.projectDetailsStep2Form.value.householdIcome;
        const nampropertyAreae = this.projectDetailsStep2Form.value.propertyArea;
        this.store.dispatch(fromEstimationSupport.actions.SAVE_PROJECT_DETAILS(
          {
            ownerOrTenant,
            numberOfPeopleInTheHousehold,
            householdIcome,
            nampropertyAreae
          }))
      }
    )
  }
 
}
