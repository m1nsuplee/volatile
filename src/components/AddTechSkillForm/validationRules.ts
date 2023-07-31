import { AddTechSkillFormRegisterOptions } from './models';

export const ADD_TECH_SKILL_FORM_VALIDATION_RULES: AddTechSkillFormRegisterOptions =
  {
    minLength: {
      value: 2,
      message: '',
    },
    required: {
      value: true,
      message: '',
    },
  };
