import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { EstimationSupportEffect } from "./effects/estimation-support.effects";
import { CommonModule } from "@angular/common";
import * as fromEstimationSupportReducer from './reducers/estimation-support.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromEstimationSupportReducer.ESTIMATION_SUPPORT_FEATURE_KEY, fromEstimationSupportReducer.estimationSupportReducer),
    EffectsModule.forFeature([EstimationSupportEffect]),
  ]
})
export class EstimationSupportStoreModule {}

