import { FormInput } from '@/types/forms/formInput';
import InputWrapper from '../inputWrapper/InputWrapper';
import { Gender } from '@/types/gender';
import { useEffect, useState } from 'react';
import { schema } from '@/types/forms/validationSchema';
import { getError } from '@/utils/form';

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
      <select
        ref={refs}
        onChange={onChange}
        id={name}
        defaultValue={'no-select'}
      >
        <option value='no-select' disabled>
          Select gender
        </option>
        <option value={Gender.Man}>Man</option>
        <option value={Gender.Woman}>Woman</option>
      </select>
    </InputWrapper>
  );
}
