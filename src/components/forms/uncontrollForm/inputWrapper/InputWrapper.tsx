import { FormInput } from '@/types/forms/formInput';
import styles from './inputWrapper.module.css';
import { ReactNode } from 'react';

type Props = {
  name: keyof FormInput;
  label: string;
  children: ReactNode;
  error?: string;
  isValid: boolean;
};

export default function InputWrapper({
  name,
  label,
  children,
  error,
  isValid,
}: Props): JSX.Element {
  return (
    <div className={styles['custom-input']}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.field}>
        {children}
        <div className={styles.info}>
          {!isValid && <span className={styles.error}>*</span>}
          {error && <span className={styles.error}>{error}</span>}
          {isValid && <span className={styles.pass}>Correct</span>}
        </div>
      </div>
    </div>
  );
}
