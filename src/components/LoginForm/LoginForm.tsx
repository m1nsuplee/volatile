import { FormProvider, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { LoginFormValidationRules } from './validationRules';

type LoginFormValues = {
  id: string;
  password: string;
};

const OnSubmitMessage = {
  valid: '로그인 성공!',
  invalid: '로그인 실패!',
};

const ID = 'form98';
const Password = '7@2aD5$9Gt!f';

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
    ({ id, password }: LoginFormValues) => {
      const isIDValid = id === ID;
      const isPasswordValid = password === Password;
      const isCredentialsValid = isIDValid && isPasswordValid;

      if (isCredentialsValid) {
        alert(OnSubmitMessage.valid);
      } else {
        alert(OnSubmitMessage.invalid);
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
            required={LoginFormValidationRules.ID.required}
            minLength={LoginFormValidationRules.ID.minLength}
            maxLength={LoginFormValidationRules.ID.maxLength}
            pattern={LoginFormValidationRules.ID.pattern}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required={LoginFormValidationRules.PASSWORD.required}
            minLength={LoginFormValidationRules.PASSWORD.minLength}
            pattern={LoginFormValidationRules.PASSWORD.pattern}
          />
        </div>
        <input type="submit" value={'로그인'} />
      </form>
    </FormProvider>
  );
};
