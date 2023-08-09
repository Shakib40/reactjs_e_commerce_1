import React from 'react';
import { Field } from 'formik';
import AsyncSelect from 'react-select/lib/Async';
// import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';

const RenderSelectInput = (props) => {
  const {
    field,
    options,
    placeholder,
    isDisabled,
    isSearchable,
    className,
    cacheOptions,
    loadOptions,
    label,
    form: { errors, setFieldValue, submitCount }
  } = props;
  return (
    <div>
      <label>
        {label}
      </label>
      <AsyncSelect
        name={field.name}
        cacheOptions={cacheOptions}
        defaultOptions={options}
        value={field.value}
        loadOptions={loadOptions}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        placeholder={placeholder}
        className={className}
        isMulti
        onChange={(option) => { setFieldValue(field.name, option); }}
        options={options}
      />
      {((submitCount > 0 && errors[field.name]))
        && (
          <div className="error">
            {errors[field.name]}
          </div>
        )
      }
    </div>
  );
};

const ReactAsyncSelect = (props) => {
  const {
    name,
    id,
    options,
    onChange,
    placeholder,
    isMulti,
    isDisabled,
    isSearchable,
    className,
    cacheOptions,
    loadOptions,
    defaultOptions,
    isCreatable,
    validate,
    errorLabel,
    label
  } = props;
  return (
    <div>
      <Field
        name={name}
        component={RenderSelectInput}
        id={id}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        isMulti={isMulti}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        className={className}
        cacheOptions={cacheOptions}
        loadOptions={loadOptions}
        defaultOptions={defaultOptions}
        isCreatable={isCreatable}
        validate={validate}
        errorLabel={errorLabel}
        label={label}
      />
    </div>
  );
};
export default ReactAsyncSelect;
