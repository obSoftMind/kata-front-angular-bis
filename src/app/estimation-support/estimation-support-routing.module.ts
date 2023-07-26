import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PersonalInformationStep1Component } from './personal-information-step-1/personal-information-step-1.component';
import { ProjectDetailsStep2Component } from './project-details-step-2/project-details-step-2.component';
import { RecapPageStep3Component } from './recap-page-step-3/recap-page-step-3.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/per-info', pathMatch: 'full'
  },
  {
    path: 'per-info', component: PersonalInformationStep1Component,
  },
  {
    path: 'project-details', component: ProjectDetailsStep2Component
  },
  {
    path: 'recap-page', component: RecapPageStep3Component,
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimationSupportRoutingModule { }
