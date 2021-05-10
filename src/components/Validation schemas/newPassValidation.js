import * as yup from 'yup';
import validations from './validations';

const newPasswordValidation = yup.object().shape({
  password: validations.password,
  confirmpassword: validations.confirmpassword,
});

export default newPasswordValidation;
