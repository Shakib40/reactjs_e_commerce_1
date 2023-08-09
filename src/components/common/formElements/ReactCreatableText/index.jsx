import React, { useState } from 'react';
import { Field } from 'formik';
import ErrorMessage from '@formElements/ErrorMessage';
import CreatableSelect from 'react-select/lib/Creatable';

const CustomInputComponent = (props) => {
  const { field, form: { setFieldValue } } = props;
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState([]);
  const components = {
    DropdownIndicator: null
  };

  const createOption = (emailId) => {
    if (props.regExp) {
      if (props.regExp.test(emailId)) {
        return {
          value: emailId,
          label: emailId
        };
      }
    }
    return null;
  };

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
      case ',':
      case ' ':
        if (createOption(inputValue) !== null) {
          value.push(createOption(inputValue));
          setValue(value);
          setInputValue('');
          setFieldValue(field.name, value);
        }
        event.preventDefault();
        break;
      default:
    }
  };

  const handelchange = (value2) => {
    setFieldValue(field.name, value2);
    setValue(value2);
  };

  const handleInputchange = (enterd) => {
    if (enterd !== ',') {
      setInputValue(enterd);
    }
  };

  return (
    <div>
      <CreatableSelect
        name={field.name}
        components={components}
        inputValue={inputValue}
        classNamePrefix="reactSelect"
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={handelchange}
        onInputChange={handleInputchange}
        onKeyDown={handleKeyDown}
        placeholder="Enter Email"
        value={value}
      />
    </div>
  );
};

const ReactCreatableText = (props) => {
  const {
    name,
    label,
    onChange,
    multiple,
    type,
    errorLabel,
    placeholder,
    readOnly,
    validate,
    className,
    customClass,
    maxLength,
    regExp
  } = props;
  return (
    <div>
      <Field
        name={name}
        component={CustomInputComponent}
        label={label}
        multiple={multiple}
        className={className}
        placeholder={placeholder}
        type={type}
        errorLabel={errorLabel}
        readOnly={readOnly}
        validate={validate}
        customClass={customClass}
        onChange={onChange}
        maxLength={maxLength}
        regExp={regExp}
      />
      <ErrorMessage name={name} component="div" className="clr-red" />
    </div>
  );
};

export default ReactCreatableText;
