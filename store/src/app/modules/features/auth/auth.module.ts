import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.module.routing';
import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
