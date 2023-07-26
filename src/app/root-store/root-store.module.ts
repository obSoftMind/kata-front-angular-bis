import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { EstimationSupportStoreModule } from "./estimation-support-store/estimation-support-store.module";
import * as fromState from '.';
@NgModule({
    declarations: [],
    imports: [
      StoreModule.forRoot(fromState.reducers),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      EstimationSupportStoreModule
    ],
  })
export class RootStoreModule {}