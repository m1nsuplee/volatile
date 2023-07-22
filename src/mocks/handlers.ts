import { rest } from 'msw';
import { ID, PASSWORD } from '../components/LoginForm/data';

type LoginRequest = {
  id: string;
  password: string;
};

export const handlers = [
  rest.post<LoginRequest>('/login', async (req, res, ctx) => {
    const { id, password } = req.body;

    const isIDValid = id === ID;
    const isPasswordValid = password === PASSWORD;
    const isCredentialsValid = isIDValid && isPasswordValid;

    if (isCredentialsValid) {
      return res(ctx.status(200));
    } else {
      return res(ctx.status(400));
    }
  }),
];
