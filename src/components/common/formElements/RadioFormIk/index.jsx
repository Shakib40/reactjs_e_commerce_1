import React, { Fragment } from 'react';
import { Field } from 'formik';

const renderField = (props) => {
  const {
    field,
    readOnly,
    form: { touched, errors, submitCount },
    defaultChecked,
    disabled,
    defaultValue,
    options,
    externalLabel,
    customClass
  } = props;
  const radioContainerClass = `col custom-control custom-radio pr-0 ${customClass}`;
  return (
    <Fragment>
      <div className="row m-0">
        {
          options.map((option) => {
            // console.log(option.value);
            return (
              <div className={radioContainerClass} key={`${externalLabel}_${option.label}_${field.value}`}>
                <input
                  {...field}
                  className="custom-control-input"
                  type="radio"
                  value={option.value}
                  defaultValue={defaultValue}
                  readOnly={readOnly}
                  id={`${externalLabel}_${option.label}_${field.value}`}
                  defaultChecked={defaultChecked}
                  checked={option.value === field.value}
                  disabled={disabled}
                />
                <label className="clr-input-box-label fw-normal custom-control-label" htmlFor={`${externalLabel}_${option.label}_${field.value}`}>
                  {option.label}
                </label>
              </div>
            );
          })
        }
      </div>
      {((submitCount > 0)
        || (touched[field.name]
        && errors[field.name]))
        && (
          <div className="error">
            {errors[field.name]}
          </div>
        )
      }
    </Fragment>
  );
};

export const RadioGroup = (props) => {
  // console.log(props);
  const {
    readOnly,
    validate,
    defaultValue,
    onChange,
    externalLabel,
    disabled,
    customClass,
    errorLabel,
    label,
    defaultChecked,
    options
  } = props;

  return (
    <div>
      <label className="background_color_transparant clr-input-box-label fs-12 m-0">
        {label}
      </label>
      <Field
        name={props.name}
        component={renderField}
        defaultValue={defaultValue}
        readOnly={readOnly}
        validate={validate}
        onChange={onChange}
        disabled={disabled}
        errorLabel={errorLabel}
        defaultChecked={defaultChecked}
        externalLabel={externalLabel}
        customClass={customClass}
        options={options}
      />
    </div>);
};
export default RadioGroup;
