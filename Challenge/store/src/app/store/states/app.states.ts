import { IUser } from '../../modules/core/interfaces/api-responses.interface';

export interface UserState {
  user: IUser;
}

export const initialAppState: UserState = {
  user: undefined,
};
