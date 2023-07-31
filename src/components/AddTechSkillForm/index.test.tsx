import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AddTechSkillForm } from '.';
import userEvent from '@testing-library/user-event';

describe('<AddTechSkillForm />', () => {
  it('정상적으로 화면에 rendering 된다.', () => {
    const view = render(<AddTechSkillForm />);
    const skillInput = view.getByLabelText(/스킬 1/i) as HTMLInputElement;
    const removeButton = view.getByText('(X)');
    const addButton = view.getByText('(+)');

    expect(skillInput).toBeInTheDocument();
    expect(skillInput).toHaveValue('');
    expect(removeButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();

    view.debug();
  });

  it('(+) 버튼을 클릭하면, input이 추가된다.', async () => {
    const view = render(<AddTechSkillForm />);
    const addButton = view.getByText('(+)');

    await userEvent.click(addButton);

    const skillInput2 = view.getByLabelText(/스킬 2/i) as HTMLInputElement;

    expect(skillInput2).toBeInTheDocument();
    expect(skillInput2).toHaveValue('');

    await userEvent.click(addButton);
    await userEvent.click(addButton);

    const skillInput3 = view.getByLabelText(/스킬 3/i) as HTMLInputElement;
    const skillInput4 = view.getByLabelText(/스킬 4/i) as HTMLInputElement;

    expect(skillInput3).toBeInTheDocument();
    expect(skillInput3).toHaveValue('');

    expect(skillInput4).toBeInTheDocument();
    expect(skillInput4).toHaveValue('');

    const removeButton = view.getAllByText('(X)')[0];

    await userEvent.click(removeButton);

    expect(view.queryByLabelText(/스킬 4/i)).not.toBeInTheDocument();
  });
});
