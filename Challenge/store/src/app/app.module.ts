import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/features/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { reducers } from './store/reducers';
import { effects } from './store/effects/index';

/**
 * Auth module is eagerly loaded due to its basic functionality
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effects),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
