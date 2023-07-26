import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromEstimationSupport from '../../root-store/estimation-support-store/index';

import { Store, select } from '@ngrx/store';
import { PersonalInformation } from 'src/app/models/personal-information.medel';

@Component({
  selector: 'recap-page-step-3',
  templateUrl: './recap-page-step-3.component.html',
  styleUrls: ['./recap-page-step-3.component.scss']
})
export class RecapPageStep3Component implements OnInit {

  amount$: Observable<number>;
  user$: Observable<PersonalInformation>;
  isIligible$: Observable<boolean>;

  constructor(private readonly store$: Store<fromEstimationSupport.EstimationSupportState>) { }

  ngOnInit(): void {
   this.amount$ = this.store$.pipe(select(fromEstimationSupport.selectors.selectAmount));
   this.user$ = this.store$.pipe(select(fromEstimationSupport.selectors.selectUserInformation));
   this.isIligible$ = this.store$.pipe(select(fromEstimationSupport.selectors.selectIsiligible));
  }
}
