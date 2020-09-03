import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/features/auth/auth.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthService } from './modules/features/auth/services/auth.service';

import { authReducer } from './store/auth.store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ auth: authReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
