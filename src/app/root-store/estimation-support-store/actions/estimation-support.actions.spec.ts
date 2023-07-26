
import { TestBed } from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import { AppComponent } from 'src/app/app.component';
import { SAVE_PERSONAL_INFORMATION } from './estimation-support.actions';

let store: MockStore;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [
      AppComponent
    ],
    providers: [
      provideMockStore({ }),
    ],
  }).compileComponents();

  store = TestBed.inject(MockStore);
});

it('should dispatch action1', () => {
  const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();  
  TestBed.createComponent(AppComponent);
  
  expect(dispatchSpy).toHaveBeenCalledWith(SAVE_PERSONAL_INFORMATION);
  
});







// describe('Should dispatch SAVE_PERSONAL_INFORMATION action', () => {
//     it('should create an action', () => {
        
//     });
// });

// describe('Should dispatch SAVE_PROJECT_DETAILS action', () => {
//     it('should create an action', () => {
        
//     });
// });