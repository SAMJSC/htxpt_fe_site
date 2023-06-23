export type TestReturn = {
  data: {
    message: string;
    success: boolean;
  };
};

export type MutationTestResponse = {
  message: string;
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export type MutationArg = {
  email: string;
  password: string;
};
