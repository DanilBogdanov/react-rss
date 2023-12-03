import { FormInput } from '@/types/forms/formInput';
import { FormState, UseFormRegister } from 'react-hook-form';
import InputWrapper from '../inputWrapper/InputWrapper';

type Props = {
  type: string;
  name: keyof FormInput;
  label: string;
  register: UseFormRegister<FormInput>;
  formState: FormState<FormInput>;
};

export default function CustomInput({
  type,
  name,
  label,
  register,
  formState,
}: Props): JSX.Element {
  return (
    <InputWrapper name={name} label={label} formState={formState}>
      <input type={type} placeholder={label} {...register(name)} id={name} />
    </InputWrapper>
  );
}
