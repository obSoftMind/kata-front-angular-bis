
import {ActionReducerMap } from "@ngrx/store";
import * as fromEstimationSupportReducer from './estimation-support-store/reducers/estimation-support.reducer';


export interface State {
  estimationSupport : fromEstimationSupportReducer.EstimationSupportState
  // ..
}

export const reducers : ActionReducerMap<State> = {
  estimationSupport:fromEstimationSupportReducer.estimationSupportReducer
  // ..
}

