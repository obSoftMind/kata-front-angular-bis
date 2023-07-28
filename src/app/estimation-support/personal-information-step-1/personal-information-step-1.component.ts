import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromEstimationSupport from '../../root-store/estimation-support-store/index';
import { Patterns } from '../../common/patterns.const';
import { filter } from 'rxjs';

@Component({
  selector: 'personal-information-step-1',
  templateUrl: './personal-information-step-1.component.html',
  styleUrls: ['./personal-information-step-1.component.scss']
})
export class PersonalInformationStep1Component implements OnInit{

 
  emailPattern = Patterns.emailPattern;

  personalInformationStep1Form = this.fb.group({
    civility: ['', Validators.required],
    name: ['', Validators.required],
    firstName: ['', Validators.required],
    email: ['', {
      validators: [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]
    }],
    phonenumber: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private readonly store: Store<fromEstimationSupport.EstimationSupportState>) { }

  ngOnInit(): void {

    
    this.personalInformationStep1Form.valueChanges
    .pipe(
      filter(() => this.personalInformationStep1Form.valid)
    ).subscribe( () => {
      const civility = this.personalInformationStep1Form.value.civility;
      const name = this.personalInformationStep1Form.value.name
      const firstName = this.personalInformationStep1Form.value.firstName
      const email = this.personalInformationStep1Form.value.email
      const phonenumber = this.personalInformationStep1Form.value.phonenumber
      this.store.dispatch(fromEstimationSupport.actions.SAVE_PERSONAL_INFORMATION(
        {
          civility,
          name,
          firstName,
          email,
          phonenumber
        }))
    })
  } 
}
