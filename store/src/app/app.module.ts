import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/features/auth/auth.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { appReducer, AppEffects } from './store/app.store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
