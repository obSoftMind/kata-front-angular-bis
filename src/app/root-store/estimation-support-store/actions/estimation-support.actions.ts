import { createAction, props } from "@ngrx/store"

export const SAVE_PERSONAL_INFORMATION = createAction(
    `[USER FORM] SAVE PERSONAL INFORMATION`,
    props<{ 
        civility: string, 
        name: string, 
        firstName: string, 
        email: string, 
        phonenumber: string 
    }>()
)

export const SAVE_PROJECT_DETAILS = createAction(
    `[USER PROJECT FORM] SAVE PROJECT DETAILS`,
    props<{ 
        ownerOrTenant: string, 
        numberOfPeopleInTheHousehold: number, 
        householdIcome: number, 
        nampropertyAreae: number
    }>()
)
