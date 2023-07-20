import { RegisterOptions, useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
} & RegisterOptions;

export const Input = ({
  name,
  type,
  placeholder,
  ...registerOptions
}: InputProps) => {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <label htmlFor={name}>{name}</label>
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name, registerOptions)}
        />
      </div>
      {error ? (
        <p
          style={{
            color: 'red',
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '-0.5px',
          }}
        >
          {error.message}
        </p>
      ) : null}
    </div>
  );
};
