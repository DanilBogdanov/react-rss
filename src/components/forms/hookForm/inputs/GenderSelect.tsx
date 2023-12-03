import { FormInput } from '@/types/forms/formInput';
import { FormState, UseFormRegister } from 'react-hook-form';
import InputWrapper from '../inputWrapper/InputWrapper';
import { Gender } from '@/types/gender';

type Props = {
  name: keyof FormInput;
  label: string;
  register: UseFormRegister<FormInput>;
  formState: FormState<FormInput>;
};

export default function GenderSelect({
  name,
  label,
  register,
  formState,
}: Props): JSX.Element {
  return (
    <InputWrapper name={name} label={label} formState={formState}>
      <select {...register('gender')} defaultValue={'no-select'} id={name}>
        <option value='no-select' disabled>
          Select gender
        </option>
        <option value={Gender.Man}>Man</option>
        <option value={Gender.Woman}>Woman</option>
      </select>
    </InputWrapper>
  );
}
