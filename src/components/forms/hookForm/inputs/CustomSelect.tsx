import { FormInput } from '@/types/forms/formInput';
import { FormState, UseFormRegister } from 'react-hook-form';
import InputWrapper from '../inputWrapper/InputWrapper';

type Props = {
  name: keyof FormInput;
  label: string;
  register: UseFormRegister<FormInput>;
  formState: FormState<FormInput>;
  list: string[];
};

export default function CustomSelect({
  name,
  label,
  register,
  formState,
  list,
}: Props): JSX.Element {
  return (
    <InputWrapper name={name} label={label} formState={formState}>
      <input
        placeholder={label}
        {...register(name)}
        id={name}
        list={`${name}-list`}
      />
      <datalist id={`${name}-list`}>
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </datalist>
    </InputWrapper>
  );
}
