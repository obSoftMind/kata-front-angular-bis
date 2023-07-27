import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/per-info', pathMatch: 'full' },
  {
    path: 'per-info',
    loadChildren: () => import('./estimation-support/estimation-support.module').then(m => m.EstimationSupportModule)
  },
  // {
  //   path: "**", component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
