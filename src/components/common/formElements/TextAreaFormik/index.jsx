import React, { Component } from 'react';
import { Field } from 'formik';
import cx from 'classnames';
import styles from './text-area.css';

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
      form: { touched, errors, submitCount },
      label,
      className,
      customClass,
      placeholder,
      maxLength,
      onChange = () => {},
      style
    } = this.props;
    let fieldClass = `form-control form-control-danger ${styles.inputField} ${className}`;
    if (customClass) {
      fieldClass = `${fieldClass} ${customClass}`;
    }
    // console.log('field.value', field.value);
    const inputContainerClass = this.state.focused || (field.value && field.value !== '') ? styles.inputFocused : styles.inputBlur;
    const labelClass = this.state.focused || (field.value && field.value !== '') ? styles.labelFocused : styles.labelBlur;
    return (
      <div className={inputContainerClass}>
        {label && (
          <label className={cx(labelClass, styles.customLabel, 'fs-12', 'clr-input-box-label', 'mb-1', 'background_color_transparant')}>
            {label}
          </label>
        )}
        <textarea
          onChangeCapture={e => onChange(e.currentTarget)}
          {...field}
          placeholder={placeholder}
          style={style}
          type={type}
          value={field.value || ''}
          className={fieldClass}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          maxLength={maxLength}
        />
        {((submitCount > 0)
        || (touched[field.name]
        && errors[field.name]))
          && (
            <div className="error fs-12">
              {errors[field.name]}
            </div>
          )
        }
      </div>
    );
  }
}

const TextArea = (props) => {
  const {
    name,
    label,
    className,
    type,
    onChange,
    placeholder,
    maxLength,
    style
  } = props;
  return (
    <div>
      <Field
        name={name}
        placeholder={placeholder}
        className={className}
        component={CustomInputComponent}
        label={label}
        type={type}
        style={style}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextArea;
