import { FormRefs } from '@/types/forms/formRefs';
import { convertToFormData, getFormData, validateForm } from '@/utils/form';
import { useRef, useState } from 'react';
import CustomInput from './inputs/CustomInput';
import GenderSelect from './inputs/GenderSelect';
import CustomSelect from './inputs/CustomSelect';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { formsSlice } from '@/store/reducers/formsSlice';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/types/routes';

export default function UncontrolledForm(): JSX.Element {
  const navigate = useNavigate();
  const refs: FormRefs = {
    name: useRef<HTMLInputElement>(null!),
    age: useRef<HTMLInputElement>(null!),
    email: useRef<HTMLInputElement>(null!),
    gender: useRef<HTMLSelectElement>(null!),
    pass: useRef<HTMLInputElement>(null!),
    confirmPass: useRef<HTMLInputElement>(null!),
    ts: useRef<HTMLInputElement>(null!),
    file: useRef<HTMLInputElement>(null!),
    country: useRef<HTMLInputElement>(null!),
  };
  const formRef = useRef<HTMLFormElement>(null!);
  const dispatch = useAppDispatch();
  const { addUncontrolledForm, setNewForm } = formsSlice.actions;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { countries } = useAppSelector((state) => state.country);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = getFormData(refs);
    const result = await validateForm(formData);

    if (result) {
      setErrors(result);
    } else {
      const fr = new FileReader();
      if (formData.file) {
        fr.readAsDataURL(formData.file[0]);
        fr.onload = () => {
          dispatch(
            addUncontrolledForm(
              convertToFormData(formData, fr.result?.toString() ?? '')
            )
          );
          dispatch(setNewForm('ref'));
          setTimeout(() => {
            dispatch(setNewForm(null));
          }, 5000);
          navigate(AppRoutes.Main);
        };
      }
    }
  };

  return (
    <form onSubmit={submitHandler} noValidate ref={formRef}>
      <CustomInput
        name={'name'}
        label={'Name'}
        error={errors.name}
        refs={refs.name}
      />
      <CustomInput
        name='age'
        type='number'
        label='Age'
        error={errors.age}
        refs={refs.age}
      />
      <CustomInput
        name='email'
        type='email'
        label='Email'
        error={errors.email}
        refs={refs.email}
      />
      <CustomInput
        name='pass'
        type='password'
        label='Password'
        error={errors.pass}
        refs={refs.pass}
      />
      <CustomInput
        name='confirmPass'
        type='password'
        label='Confirm Password'
        error={errors.confirmPass}
        refs={refs.confirmPass}
        passRef={refs.pass}
      />
      <GenderSelect
        name='gender'
        label='Gender'
        error={errors.gender}
        refs={refs.gender}
      />
      <CustomSelect
        name='country'
        label='Country'
        error={errors.country}
        refs={refs.country}
        list={countries}
      />
      <CustomInput
        name='file'
        type='file'
        label='Image'
        error={errors.file}
        refs={refs.file}
      />
      <CustomInput
        name='ts'
        type='checkbox'
        label='Terms'
        error={errors.ts}
        refs={refs.ts}
      />
      <input type='submit' value='Submit' />
    </form>
  );
}
