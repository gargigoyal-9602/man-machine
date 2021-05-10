import * as yup from 'yup';
import getValidations from './validations';

export default function getLoginValidation() {
  const validations = getValidations();
  return yup.object().shape({
    userEmail:
      validations.email /*yup
            .string()
            .required(emaillang.get("emailRequired", "Email is required."))*/,
    password:
      validations.password /* yup
            .string()
            .required(loginlang.get("passwordRequiredError", "Password is required."))*/,
  });
}
