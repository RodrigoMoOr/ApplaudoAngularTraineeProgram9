export interface User {
  id: number;
  email: string;
  name: string;
}

export interface UserState {
  user: User;
  token: string;
}

export const initialAppState: UserState = {
  user: undefined,
  token: undefined,
};
