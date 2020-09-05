export interface User {
  id: number;
  email: string;
  name: string;
}

export interface UserState {
  user: User;
}

export const initialAppState: UserState = {
  user: undefined,
};
