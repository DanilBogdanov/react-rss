import { FormInput } from '@/types/forms/formInput';
import InputWrapper from '../inputWrapper/InputWrapper';
import { useEffect, useState } from 'react';

type Props = {
  type?: string;
  refs: React.MutableRefObject<HTMLInputElement>;
  passRef?: React.MutableRefObject<HTMLInputElement>;
  name: keyof FormInput;
  label: string;
  error?: string;
};

export default function CustomInput({
  type = 'text',
  refs,
  name,
  label,
  error,
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
      <input type={type} placeholder={label} id={name} ref={refs} />
    </InputWrapper>
  );
}
