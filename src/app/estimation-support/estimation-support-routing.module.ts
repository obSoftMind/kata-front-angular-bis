import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { EstimationSupportComponent } from './estimation-support.component';

const routes: Routes = [
  
  {
    path: 'home', component: EstimationSupportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimationSupportRoutingModule { }
