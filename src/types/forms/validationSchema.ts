import * as yup from 'yup';
import { countries } from '../countries';
import { Gender } from '../gender';

const specialCharacters = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
const allowedImgTypes = ['image/jpeg', 'image/png'];
const allowedImgSize = 1024 * 1024 * 5;

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]/, 'First letter must be uppercased')
    .required(),
  age: yup
    .number()
    .positive()
    .integer()
    .max(100)
    .required()
    .typeError('Field age is required'),
  email: yup.string().email().required(),
  pass: yup
    .string()
    .matches(/[0-9]/, 'must contain number')
    .matches(/[a-z]/, 'must contain down cased letter')
    .matches(/[A-Z]/, 'must contain upper cased letter')
    .matches(specialCharacters, 'must contain special character')
    .required(),
  confirmPass: yup
    .string()
    .oneOf([yup.ref('pass')], 'Passwords does not match')
    .required(),
  gender: yup
    .string()
    .oneOf([Gender.Man, Gender.Woman], 'Select gender')
    .required(),
  ts: yup
    .boolean()
    .isTrue('You need to be agree to the Terms and Conditions')
    .required(),
  file: yup
    .mixed<FileList>()
    .test(
      'required',
      'Please select a file',
      (value) => value && value.length > 0
    )
    .test(
      'imgType',
      'Please select .png or .jpg file',
      (value) => value && value[0] && allowedImgTypes.includes(value[0].type)
    )
    .test(
      'imgSize',
      'Please select file less than 5Mb',
      (value) => value && value[0] && value[0].size < allowedImgSize
    )
    .required(),
  country: yup.string().oneOf(countries, 'Type correct country').required(),
});
