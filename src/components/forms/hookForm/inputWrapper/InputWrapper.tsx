import { FormInput } from '@/types/forms/formInput';
import { FormState } from 'react-hook-form';
import styles from './inputWrapper.module.css';
import { ReactNode } from 'react';

type Props = {
  name: keyof FormInput;
  label: string;
  formState: FormState<FormInput>;
  children: ReactNode;
};

export default function InputWrapper({
  name,
  label,
  formState,
  children,
}: Props): JSX.Element {
  const isDirty = !formState.dirtyFields[name];
  const errorMessage = formState.errors[name]?.message;
  const isValid = !errorMessage && !isDirty;

  return (
    <div className={styles['custom-input']}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.field}>
        {children}
        <div className={styles.info}>
          {isDirty && <span className={styles.error}>*</span>}
          {errorMessage && <span className={styles.error}>{errorMessage}</span>}
          {isValid && <span className={styles.pass}>Correct</span>}
        </div>
      </div>
    </div>
  );
}
