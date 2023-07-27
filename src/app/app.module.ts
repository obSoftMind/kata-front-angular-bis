import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store/root-store.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EstimationSupportModule } from './estimation-support/estimation-support.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // AppRoutingModule,
    RootStoreModule,
    BrowserAnimationsModule,
    EstimationSupportModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
