import { Gender } from '../gender';

export type FormInput = {
  name: string;
  age: number;
  email: string;
  pass: string;
  confirmPass: string;
  gender: Gender;
  ts: boolean;
  file: FileList;
  country: string;
};

export type RefFormInput = {
  name: string;
  age: string;
  email: string;
  pass: string;
  confirmPass: string;
  gender: string;
  ts: boolean;
  file: FileList | null;
  country: string;
};
