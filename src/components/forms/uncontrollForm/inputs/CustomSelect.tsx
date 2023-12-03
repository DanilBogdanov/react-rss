import { FormInput } from '@/types/forms/formInput';
import InputWrapper from '../inputWrapper/InputWrapper';
import { schema } from '@/types/forms/validationSchema';
import { getError } from '@/utils/form';
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
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      setErr(error);
    } else {
      setErr('');
    }
  }, [error]);

  const onChange = async () => {
    try {
      const value = { [name]: refs.current.value };

      await schema.validateAt(name, value, { abortEarly: false });
      setErr('');
      setIsValid(true);
    } catch (e) {
      setErr(getError(e));
      setIsValid(false);
    }
  };

  return (
    <InputWrapper name={name} label={label} error={err} isValid={isValid}>
      <input
        placeholder={label}
        id={name}
        list={`${name}-list`}
        ref={refs}
        onChange={onChange}
        onReset={onChange}
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
