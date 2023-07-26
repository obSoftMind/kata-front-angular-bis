import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as EligibilityActions from '../actions/estimation-support.actions';
import { tap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class EstimationSupportEffect {

    redirectToUserInfoProject$ = createEffect(() => 
        this.actions$.pipe(
            ofType(EligibilityActions.SAVE_PERSONAL_INFORMATION),
            tap( (action) => {
                console.log(action)
                return this.router.navigateByUrl('project-details')
            })
        ), {dispatch: false}
    )

    redirectToUserInfoRecap$ = createEffect(() => 
    this.actions$.pipe(
        ofType(EligibilityActions.SAVE_PROJECT_DETAILS),
        tap( () => {
            return  this.router.navigateByUrl('recap-page');
        })
    ), {dispatch: false}
)

    constructor(private actions$: Actions, private router: Router) {}
}