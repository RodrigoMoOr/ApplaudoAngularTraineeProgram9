import { AuthModule } from './modules/features/auth/auth.module';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import * as fromUser from './store/reducers/user.reducers';
import { UserEffects } from './store/effects/user.effects';

/**
 * Auth module is eagerly loaded due to its basic functionality
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot({ auth: fromUser.reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
