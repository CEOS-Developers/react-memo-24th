import { request } from "./client";
import type {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "../types/auth";

export function signUp(data: SignUpRequest) {
  return request<SignUpResponse>("/api/auth/signup", {
    method: "POST",
    body: data,
  });
}

export function login(data: LoginRequest) {
  return request<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: data,
  });
}
