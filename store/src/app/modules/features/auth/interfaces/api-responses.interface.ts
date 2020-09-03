export interface IAPIResponse {
  data: any;
}

export interface ILoginResponse {
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      name: string;
    };
  };
}
