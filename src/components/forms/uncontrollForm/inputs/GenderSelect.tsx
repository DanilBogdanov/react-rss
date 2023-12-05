import { FormInput } from '@/types/forms/formInput';
import InputWrapper from '../inputWrapper/InputWrapper';
import { Gender } from '@/types/gender';
import { useEffect, useState } from 'react';

type Props = {
  name: keyof FormInput;
  label: string;
  error: string;
  refs: React.MutableRefObject<HTMLSelectElement>;
};

export default function GenderSelect({
  name,
  label,
  error,
  refs,
}: Props): JSX.Element {
  const [err, setErr] = useState<string>('');

  useEffect(() => {
    if (error) {
      setErr(error);
    } else {
      setErr('');
    }
  }, [error]);

  return (
    <InputWrapper name={name} label={label} error={err}>
      <select ref={refs} id={name} defaultValue={'no-select'}>
        <option value='no-select' disabled>
          Select gender
        </option>
        <option value={Gender.Man}>Man</option>
        <option value={Gender.Woman}>Woman</option>
      </select>
    </InputWrapper>
  );
}
