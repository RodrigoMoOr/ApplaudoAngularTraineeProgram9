import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, StoreModule.forRoot(reducers, {
      metaReducers
    })],
  bootstrap: [AppComponent],
})
export class AppModule {}
