import React, { Fragment } from 'react';
import { Field } from 'formik';

const renderField = (props) => {
  const {
    field,
    label,
    type,
    readOnly,
    form: {
      touched,
      errors,
      submitCount,
      values
    },
    uniqueId,
    disabled
  } = props;
  return (
    <Fragment>
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          {...field}
          type={type}
          readOnly={readOnly}
          id={uniqueId}
          checked={values[field.name] || false}
          disabled={disabled}
        />
        <label className="text-muted custom-control-label" htmlFor={uniqueId}>
          {label}
        </label>
        {((submitCount > 0)
        || (touched[field.name]
        && errors[field.name]))
          && (
          <div className="error">
            {errors[field.name]}
          </div>
          )
        }
      </div>
    </Fragment>
  );
};

const CheckBox = (props) => {
  const {
    name,
    errorLabel,
    label,
    readOnly,
    validate,
    customClass,
    defaultChecked,
    onChange,
    externalLabel,
    disabled
  } = props;
  return (
    <div>
      <Field
        name={name}
        type="checkbox"
        readOnly={readOnly}
        component={renderField}
        label={label}
        errorLabel={errorLabel}
        validate={validate}
        customClass={customClass}
        uniqueId={`${externalLabel}_${name}_${label}`}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
export default CheckBox;
