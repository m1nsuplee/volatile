import axios from 'axios';
import { LoginRequest, LoginResponse } from './models';

export const login = async (LoginRequest: LoginRequest) => {
  const { status } = await axios.post<LoginResponse>('/login', LoginRequest);

  return status;
};
