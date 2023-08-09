import React, { Component } from 'react';
import { Field } from 'formik';
import ErrorMessage from '@formElements/ErrorMessage';
import cn from 'classnames';
import styles from './textfield.module.css';

class CustomInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true
    });
  }

  onBlur() {
    this.setState({
      focused: false
    });
  }

  render() {
    const {
      type,
      field,
      label,
      customClass,
      className,
      multiple,
      onChange = () => {},
      placeholder,
      readOnly,
      id,
      maxLength,
    } = this.props;
    let fieldClass = `form-control form-control-danger ${styles.inputField} ${className}`;
    if (customClass) {
      fieldClass = `${fieldClass} ${customClass} ${className}`;
    }
    // console.log('field.value', field.value);
    const inputContainerClass = this.state.focused || (field.value && field.value !== '') ? styles.inputFocused : styles.inputBlur;
    const labelClass = this.state.focused || (field.value && field.value !== '') ? styles.labelFocused : styles.labelBlur;
    return (
      <div className={inputContainerClass}>
        {label && (
          <label className={cn(labelClass, styles.customLabel, 'background_color_transparant', 'clr-input-box-label')}>
            {label}
          </label>
        )}
        <input
          onChangeCapture={e => onChange(e.currentTarget)}
          {...field}
          placeholder={placeholder}
          capture
          type={type}
          multiple={multiple}
          value={field.value || ''}
          className={fieldClass}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={readOnly}
          id={id}
          maxLength={maxLength}
        />
      </div>
    );
  }
}

const Textfield = (props) => {
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
    id,
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
        id={id}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default Textfield;
