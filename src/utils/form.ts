import { FormsData } from '@/types/forms/formData';
import { RefFormInput } from '@/types/forms/formInput';
import { FormRefs } from '@/types/forms/formRefs';
import { schema } from '@/types/forms/validationSchema';
import { ValidationError } from 'yup';

export const validateForm = async (
  formData: RefFormInput
): Promise<Record<string, string> | null> => {
  try {
    await schema.validate(formData, { abortEarly: false });
    return null;
  } catch (err) {
    const errors: Record<string, string> = {};
    if (err instanceof ValidationError) {
      err.inner.map((error) => {
        const errorKey = error.path;
        if (errorKey) {
          if (!errors[errorKey]) {
            errors[errorKey] = error.message;
          } else {
            errors[errorKey] += ', ' + error.message;
          }
        }
      });
    }

    return errors;
  }
};

export const getError = (err: unknown) => {
  let result = '';
  if (err instanceof ValidationError) {
    err.inner.map((error) => {
      if (result.length > 0) {
        result += `, ${error.message}`;
      } else {
        result = error.message;
      }
    });
  }

  return result;
};

export const getFormData = (refs: FormRefs): RefFormInput => {
  const formInput = {
    name: refs.name.current.value,
    age: refs.age.current.value,
    email: refs.email.current.value,
    pass: refs.pass.current.value,
    confirmPass: refs.confirmPass.current.value,
    gender: refs.gender.current.value,
    ts: refs.ts.current.checked,
    file: refs.file.current.files,
    country: refs.country.current.value,
  };

  return formInput;
};

export const convertToFormData = (
  src: RefFormInput,
  file: string
): FormsData => {
  return { ...src, file, age: +src.age };
};
