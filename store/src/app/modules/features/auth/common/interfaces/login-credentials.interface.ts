export interface ILoginPayload {
  data: ICredentials;
}

export interface ICredentials {
  email: string;
  password: string;
}
