import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store/root-store.module';
import { EstimationSupportModule } from './estimation-support/estimation-support.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RootStoreModule,
    EstimationSupportModule
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
