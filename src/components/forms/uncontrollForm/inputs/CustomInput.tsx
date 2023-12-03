import { FormInput } from '@/types/forms/formInput';
import InputWrapper from '../inputWrapper/InputWrapper';
import { useEffect, useState } from 'react';
import { schema } from '@/types/forms/validationSchema';
import { getError } from '@/utils/form';

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
  passRef,
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
      let value = {};

      switch (name) {
        case 'file':
          value = { file: refs.current.files };
          break;
        case 'ts':
          value = { ts: refs.current.checked };
          break;
        default:
          value = { [name]: refs.current.value };
          break;
      }
      if (passRef) {
        value = { ...value, pass: passRef.current.value };
      }

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
        type={type}
        placeholder={label}
        id={name}
        ref={refs}
        onChange={onChange}
      />
    </InputWrapper>
  );
}
