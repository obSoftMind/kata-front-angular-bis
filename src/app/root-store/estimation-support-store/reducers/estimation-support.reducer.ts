import { createReducer, on } from "@ngrx/store";
import * as EligibilityActions from '../actions/estimation-support.actions';
import { PersonalInformation } from "src/app/models/personal-information.medel";
import { ProjectDetails } from "src/app/models/project-setails.model.ts";
import { Constants } from "src/app/app-constants";


export const ESTIMATION_SUPPORT_FEATURE_KEY = 'estimationSupport';

export interface EstimationSupportState {
    personalInformation: PersonalInformation
    projectDetails: ProjectDetails
    amount: number
    isIligible:boolean
}

const initialState: EstimationSupportState = {
    personalInformation: null,
    projectDetails: null,
    amount: null,
    isIligible: false,
}

export const estimationSupportReducer = createReducer(
    initialState,

    on(EligibilityActions.SAVE_PERSONAL_INFORMATION,
        (state, action) => {
            const user = new PersonalInformation(
                action.civility,
                action.name,
                action.firstName,
                action.email,
                action.phonenumber)
            return {
                ...state,
                personalInformation: user,
                projectDetails: null,
                amount: null,
                isIligible: false
            }
        }
    ),
    on(EligibilityActions.SAVE_PROJECT_DETAILS,

        (state, action) => {
            let amount;
            let isIligible= false;
            const projectDetails = new ProjectDetails(
                action.ownerOrTenant,
                action.numberOfPeopleInTheHousehold,
                action.householdIcome,
                action.nampropertyAreae);

            if (action.ownerOrTenant === Constants.TENANT) isIligible = false;
            else {
                const projectCost = action.nampropertyAreae * 80;
                amount = (projectCost * 0.75) - (action.householdIcome / action.numberOfPeopleInTheHousehold) * 0.15;
                amount > 0 ? isIligible = true : isIligible = false;
            }
            return {
                ...state,
                projectDetails,
                amount,
                isIligible
            }
        })
)

