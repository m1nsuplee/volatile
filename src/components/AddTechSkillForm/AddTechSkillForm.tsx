import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { AddTechSkillFormValues } from './models';

export const AddTechSkillForm = () => {
  const addTechSkillFormMethods = useForm<AddTechSkillFormValues>({
    mode: 'onChange',
    defaultValues: {
      skills: [{ name: '' }],
    },
  });

  const { control, handleSubmit } = addTechSkillFormMethods;

  const { fields, append, remove } = useFieldArray({ control, name: 'skills' });

  const appendSkillInput = () => {
    append({ name: '' });
  };

  const removeSkillInput = (index: number) => {
    remove(index);
  };

  const handleAddTechSkillFormSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <FormProvider {...addTechSkillFormMethods}>
      <form onSubmit={handleAddTechSkillFormSubmit}>
        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
          {fields.map((field, index) => (
            <li key={field.id} style={{ position: 'relative' }}>
              {/* map 돌렸을 때, 값을 문자열로 추론 시키는 것처럼 나도 해보자 */}
              <Input name={`skills.${index}.name`} type="text" />
              <button
                type="button"
                style={{ position: 'absolute', right: '0px', top: '20px' }}
                onClick={() => removeSkillInput(index)}
              >
                {`(X)`}
              </button>
            </li>
          ))}
          <button type="button" onClick={appendSkillInput}>{`(+)`}</button>
        </ul>
        <input type="submit" />
      </form>
    </FormProvider>
  );
};
