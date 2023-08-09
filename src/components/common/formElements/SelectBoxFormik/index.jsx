import React from 'react';
import { Field } from 'formik';
import cx from 'classnames';
import styles from './index.css';

const customInputComponent = (props) => {
  const {
    type,
    field,
    form: { touched, errors, submitCount },
    label,
    customClass,
    options
  } = props;
  let fieldClass = `form-control form-control-danger ${styles.inputField}`;
  if (customClass) {
    fieldClass = `${fieldClass} ${customClass}`;
  }
  return (
    <div>
      <label className={cx(styles.labelBlur)}>
        {label}
      </label>
      <select
        {...field}
        type={type}
        value={field.value || ''}
        className={fieldClass}
      >
        {
          options.map((option) => {
            return (
              <option value={option.value} key={option.name} className={option.value ? '' : styles.placeHolder}>
                {option.name}
              </option>
            );
          })}
      </select>
      {((submitCount > 0)
        || (touched[field.name]
          && errors[field.name]))
          && (
            <div className="error">
              {errors[field.name]}
            </div>
          )}
    </div>
  );/*  */
};

const Textfield = (props) => {
  const {
    name,
    label,
    type,
    options
  } = props;
  return (
    <div>
      <Field
        name={name}
        component={customInputComponent}
        label={label}
        type={type}
        options={options}
      />
    </div>
  );
};

export default Textfield;
