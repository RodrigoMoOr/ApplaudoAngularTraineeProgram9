import { IUser } from '../../modules/core/interfaces/api-requests.interface';

export interface UserState {
  user: IUser;
}

export const initialAppState: UserState = {
  user: undefined,
};
