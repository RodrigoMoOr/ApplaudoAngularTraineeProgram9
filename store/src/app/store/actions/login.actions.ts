import { createAction, props } from '@ngrx/store';
import { IUser } from '../../modules/features/auth/interfaces/api-responses.interface';

export const login = createAction('[Login Page] Login', props<IUser>());
