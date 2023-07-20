import { RegisterOptions } from 'react-hook-form';

type Field = 'ID' | 'PASSWORD';

export const LoginFormValidationRules: Record<Field, RegisterOptions> = {
  ID: {
    required: {
      value: true,
      message: 'ID는 필수 입력사항입니다.',
    },
    minLength: {
      value: 6,
      message: 'ID는 최소 6자 이상입니다. ID를 다시 확인해주세요.',
    },
    maxLength: {
      value: 30,
      message: 'ID는 최대 30자입니다. ID를 다시 확인해주세요.',
    },
    pattern: {
      value: /^[a-z0-9]+$/,
      message:
        'ID는 영어 소문자와 숫자로만 이루어집니다. ID를 다시 확인해주세요.',
    },
  },
  PASSWORD: {
    required: {
      value: true,
      message: '비밀번호는 필수 입력사항입니다.',
    },
    minLength: {
      value: 12,
      message: '비밀번호는 최소 12자 이상입니다. 비밀번호를 다시 확인해주세요.',
    },
    pattern: {
      value:
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).+$/,
      message:
        '비밀번호는 영어 대소문자, 숫자, 특수문자를 적어도 하나씩 포함해야합니다. 비밀번호를 다시 확인해주세요.',
    },
  },
};
