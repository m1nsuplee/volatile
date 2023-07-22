import { describe, it, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import userEvent from '@testing-library/user-event';

describe('<LoginForm', () => {
  it('정상적으로 화면에 rendering 된다.', () => {
    const view = render(<LoginForm />);

    const idInput = view.getByPlaceholderText('ID');
    const passwordInput = view.getByPlaceholderText('Password');
    const submitButton = view.getByRole('button');

    expect(idInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('ID input은 text를 입력 받을 수 있다.', () => {
    const view = render(<LoginForm />);

    const idInput = view.getByLabelText('id') as HTMLInputElement;

    expect(idInput.value).toMatch('');

    fireEvent.input(idInput, {
      target: {
        value: 'm1nsuppp',
      },
    });

    expect(idInput.value).toMatch('m1nsuppp');
  });

  it('Password input은 text를 입력 받을 수 있다.', () => {
    const view = render(<LoginForm />);

    const passwordInput = view.getByLabelText('password') as HTMLInputElement;

    expect(passwordInput.value).toMatch('');

    fireEvent.input(passwordInput, {
      target: {
        value: 'thisIsPassword!',
      },
    });

    expect(passwordInput.value).toMatch('thisIsPassword!');
  });

  it('아무 것도 입력하지 않은 상태에서 submit시 에러 메시지가 rendering 되어야한다.', async () => {
    const view = render(<LoginForm />);

    const idInput = view.getByPlaceholderText('ID') as HTMLInputElement;
    const passwordInput = view.getByPlaceholderText(
      'Password'
    ) as HTMLInputElement;
    const submitButton = view.getByRole('button', { name: /로그인/i });

    expect(idInput.value).toMatch('');
    expect(passwordInput.value).toMatch('');
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);

    const idErrorMessage = view.getByText(/ID는 필수 입력사항입니다./);
    const passwordErrorMessage =
      view.getByText(/비밀번호는 필수 입력사항입니다./);

    expect(idErrorMessage).toBeInTheDocument();
    expect(passwordErrorMessage).toBeInTheDocument();

    view.debug();
  });
});
