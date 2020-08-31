import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth.module.routing';
import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
