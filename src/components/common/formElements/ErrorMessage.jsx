import React from 'react';
import {
  Field,
  getIn
} from 'formik';

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return (touch || form.submitCount > 0) && error ? (
        <small className="error">
          {error}
        </small>
      ) : null;
    }}
  />
);
export default ErrorMessage;
