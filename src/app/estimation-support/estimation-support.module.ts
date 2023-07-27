import { CommonModule, registerLocaleData } from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { EstimationSupportRoutingModule } from "./estimation-support-routing.module";
import { PersonalInformationStep1Component } from './personal-information-step-1/personal-information-step-1.component';
import { ProjectDetailsStep2Component } from './project-details-step-2/project-details-step-2.component';
import { RecapPageStep3Component } from './recap-page-step-3/recap-page-step-3.component';
import { EstimationSupportComponent } from './estimation-support.component';
import { SharedModule } from "../shared/shared.module";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    RecapPageStep3Component,
    ProjectDetailsStep2Component,
    PersonalInformationStep1Component,
    EstimationSupportComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EstimationSupportRoutingModule,
    SharedModule
  ], 
  exports: [
    RecapPageStep3Component,
    ProjectDetailsStep2Component,
    PersonalInformationStep1Component,
    EstimationSupportComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
})
export class EstimationSupportModule {

}