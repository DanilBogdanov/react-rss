import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput } from '@/types/forms/formInput';
import CustomInput from './inputs/CustomInput';
import { schema } from '@/types/forms/validationSchema';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CustomSelect from './inputs/CustomSelect';
import GenderSelect from './inputs/GenderSelect';
import InputWrapper from './inputWrapper/InputWrapper';
import { formsSlice } from '@/store/reducers/formsSlice';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/types/routes';

export default function ReactHookForm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { addReactHookForm, setNewForm } = formsSlice.actions;
  const { register, handleSubmit, formState, reset } = useForm<FormInput>({
    resolver: yupResolver<FormInput>(schema),
    mode: 'all',
  });

  const onSubmit = (data: FormInput) => {
    const fr = new FileReader();
    fr.readAsDataURL(data.file[0]);
    fr.onload = () => {
      dispatch(
        addReactHookForm({ ...data, file: fr.result?.toString() ?? '' })
      );
      dispatch(setNewForm('hook'));
      setTimeout(() => {
        dispatch(setNewForm(null));
      }, 5000);
      navigate(AppRoutes.Main);
    };
    reset();
  };

  const { countries } = useAppSelector((state) => state.country);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
      <CustomInput
        type='text'
        name='name'
        label='Name'
        register={register}
        formState={formState}
      />
      <CustomInput
        type='number'
        name='age'
        label='Age'
        register={register}
        formState={formState}
      />
      <CustomInput
        type='email'
        name='email'
        label='Email'
        register={register}
        formState={formState}
      />
      <CustomInput
        type='password'
        name='pass'
        label='Password'
        register={register}
        formState={formState}
      />
      <CustomInput
        type='password'
        name='confirmPass'
        label='Confirm Password'
        register={register}
        formState={formState}
      />
      <GenderSelect
        name='gender'
        label='Gender'
        register={register}
        formState={formState}
      />
      <CustomSelect
        name='country'
        label='Country'
        register={register}
        formState={formState}
        list={countries}
      />
      <InputWrapper name='file' label='Image' formState={formState}>
        <input type='file' {...register('file')} multiple={false} id='file' />
      </InputWrapper>
      <InputWrapper name='ts' label='Terms' formState={formState}>
        <input type='checkbox' {...register('ts')} id='ts' />
        <span>I agree</span>
      </InputWrapper>
      <input type='submit' value='Submit' disabled={!formState.isValid} />
    </form>
  );
}
