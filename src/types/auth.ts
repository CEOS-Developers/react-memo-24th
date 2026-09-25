export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};

export type SignUpRequest = {
  email: string;
  password: string;
};

export type SignUpResponse = ApiResponse<{
  userId: number;
  email: string;
}>;

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = ApiResponse<{
  accessToken: string;
}>;
