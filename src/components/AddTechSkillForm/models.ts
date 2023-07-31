import { RegisterOptions } from 'react-hook-form';

export type AddTechSkillFormRegisterOptions = Pick<
  RegisterOptions,
  'minLength' | 'required'
>;

export type AddTechSkillFormValues = {
  skills: { name: string }[];
};
