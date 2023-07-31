import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { LOGIN_FORM_VALIDATION_RULES } from './validationRules';
import { ON_SUBMIT_MESSAGE } from './data';
import axios, { AxiosError } from 'axios';
import { LoginFormValues, LoginResponse } from './models';

export const LoginForm = () => {
  const loginFormMethods = useForm<LoginFormValues>({
    mode: 'onSubmit',
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const { handleSubmit } = loginFormMethods;

  const handleLoginFormSubmit = handleSubmit(
    async ({ id, password }: LoginFormValues) => {
      try {
        const { status } = await axios.post<LoginResponse>('/login', {
          id,
          password,
        });

        alert(ON_SUBMIT_MESSAGE[status]);
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(ON_SUBMIT_MESSAGE[error.status || 400]);
        }
      }
    }
  );

  return (
    <FormProvider {...loginFormMethods}>
      <form
        onSubmit={handleLoginFormSubmit}
        autoComplete="off"
        style={{
          width: '250px',
          border: '2px solid blue',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '4px',
          padding: '4px',
        }}
      >
        <div>
          <Input
            name="id"
            type="text"
            placeholder="ID"
            required={LOGIN_FORM_VALIDATION_RULES.ID.required}
            minLength={LOGIN_FORM_VALIDATION_RULES.ID.minLength}
            maxLength={LOGIN_FORM_VALIDATION_RULES.ID.maxLength}
            pattern={LOGIN_FORM_VALIDATION_RULES.ID.pattern}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required={LOGIN_FORM_VALIDATION_RULES.PASSWORD.required}
            minLength={LOGIN_FORM_VALIDATION_RULES.PASSWORD.minLength}
            maxLength={LOGIN_FORM_VALIDATION_RULES.PASSWORD.maxLength}
            pattern={LOGIN_FORM_VALIDATION_RULES.PASSWORD.pattern}
          />
        </div>
        <input type="submit" value={'로그인'} />
      </form>
    </FormProvider>
  );
};
