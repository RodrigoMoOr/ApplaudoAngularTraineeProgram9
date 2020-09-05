export interface IAPIResponse {
  data: ILoginResponse;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface UserState {
  user: IUser;
}

export const initialAppState: UserState = {
  user: undefined,
};
