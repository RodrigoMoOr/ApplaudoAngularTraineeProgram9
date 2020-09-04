import { AuthModule } from './modules/features/auth/auth.module';
import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/**
 * Auth module is eagerly loaded due to its basic functionality
 */
@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
