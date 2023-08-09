import * as Yup from 'yup';

export const emailValidate = () => { return Yup.string().email('is not valid!').required('is required!'); };
export const required = () => { return Yup.string().required('is required!'); };
export const password = (value) => { return value && value.length > 10; };
