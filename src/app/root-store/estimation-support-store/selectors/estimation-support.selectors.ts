import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromEstimationSupport from '../reducers/estimation-support.reducer';

export const selectEstimationSupportState = createFeatureSelector<fromEstimationSupport.EstimationSupportState>(
    fromEstimationSupport.ESTIMATION_SUPPORT_FEATURE_KEY
)

export const selectUserInformation = createSelector(
    selectEstimationSupportState,
    (state:fromEstimationSupport.EstimationSupportState) => state.personalInformation
)
export const selectIsiligible = createSelector(
    selectEstimationSupportState,
    (state:fromEstimationSupport.EstimationSupportState) => state.isIligible
)
export const selectAmount = createSelector(
    selectEstimationSupportState,
    (state:fromEstimationSupport.EstimationSupportState) => state.amount
)


