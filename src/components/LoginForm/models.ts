import { RegisterOptions } from 'react-hook-form';

export type LoginFormValues = {
  id: string;
  password: string;
};

export type LoginResponse = {
  id: string;
  password: string;
};

export type Field = 'ID' | 'PASSWORD';

export type LoginFormRegisterOptions = Pick<
  RegisterOptions,
  'maxLength' | 'minLength' | 'required' | 'pattern'
>;
