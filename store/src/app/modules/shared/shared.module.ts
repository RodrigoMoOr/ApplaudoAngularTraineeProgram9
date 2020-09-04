import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CategoriesService } from './common/services/categories.service';
import { ProductsService } from './common/services/products.service';
import { AppGuard } from './../core/guards/app.guard';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [CategoriesService, ProductsService, AppGuard],
  declarations: [SnackbarComponent],
})
export class SharedModule {}
