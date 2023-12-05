import { FormInput } from '@/types/forms/formInput';
import InputWrapper from '../inputWrapper/InputWrapper';
import { useState, useEffect } from 'react';

type Props = {
  name: keyof FormInput;
  label: string;
  list: string[];
  error: string;
  refs: React.MutableRefObject<HTMLInputElement>;
};

export default function CustomSelect({
  name,
  label,
  list,
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
      <input placeholder={label} id={name} list={`${name}-list`} ref={refs} />
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
