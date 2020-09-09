import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { CategoriesService } from './../../modules/features/home/services/categories.service';
import * as CategoryActions from '../actions/category.actions';
import { Category } from '../states/category.states';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}

  getAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getAllCategories),
      switchMap(() =>
        this.categoriesService.getAllCategories().pipe(
          catchError((error) =>
            of(CategoryActions.getAllCategoriesFailure(error))
          ),
          map((categories: Category[]) =>
            CategoryActions.getAllCategoriesSuccess({ categories })
          )
        )
      )
    )
  );
}
