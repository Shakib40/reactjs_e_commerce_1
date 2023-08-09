import React from 'react';
import { Field } from 'formik';
import Select from 'react-select';
import ErrorMessage from '@formElements/ErrorMessage';
// import styles from './index.module.css';

const customStyles = {
  valueContainer: provided => ({
    ...provided,
    padding: '0px',
    marginLeft: '4px',
    position: 'static',
    height: '38px',
  }),
  singleValue: provided => ({
    ...provided,
    top: '58%'
  }),
  menu: provided => ({
    ...provided,
    zIndex: 2
  }),
  placeholder: provided => ({
    ...provided,
    // color: hsl(0,0%,50%),
    marginLeft: '2px',
    marginRight: '2px',
    position: 'absolute',
    top: '36%',
    webkitTransform: 'translateY(-50%)',
    msTransform: 'translateY(-50%)',
    transform: 'translateY(-22%)',
    // box-sizing: border-box;
  })
};

const RenderSelectInput = (props) => {
  const {
    field,
    options,
    isMulti,
    placeholder,
    label,
    form: { setFieldValue },
    customLabel,
    customId,
    isDisabled,
    onChangeOption = () => { },
    onScrollToButtom = () => { },
    onScrollToTop = () => { },
    onChangeNameOption = () => {},
    className,
    clear
  } = props;

  if (clear && !isDisabled) {
    setFieldValue(field.name, '');
    props.setClear(false);
  }

  return (
    <div className="pos-r">
      {label && (
      <label className="fs-12 clr-input-box-label mb-0 background_color_transparant">
        {label}
      </label>
      )}
      <Select
        options={options}
        getOptionLabel={(option) => { return customLabel ? option[customLabel] : option.name; }}
        getOptionValue={(option) => { return customId ? option[customId] : option.id; }}
        name={field.name}
        classNamePrefix="reactSelect"
        className={className}
        placeholder={placeholder}
        isDisabled={isDisabled}
        defaultValue={field.value || props.defaultValue}
        onChange={(option) => { setFieldValue(field.name, option); onChangeOption(option); onChangeNameOption({ name: field.name, value: option }); }}
        isMulti={isMulti}
        onMenuScrollToBottom={() => { onScrollToButtom(); }}
        onMenuScrollToTop={() => { onScrollToTop(); }}
        width="100%"
        value={field.value}
        styles={customStyles}
        theme={theme => ({
          ...theme,
          borderRadius: '5px',
          borderWidth: '1px',
          borderColor: 'rgba(173, 0, 40, 0.25)',
          boxShadow: '0 0 0 0.2rem rgba(173, 0, 40, 0.25)',
          colors: {
            ...theme.colors,
            primary: 'rgba(173, 0, 40, 0.40)',
          },
        })}
        components={{
          IndicatorSeparator: () => null
        }}
      />
      {/* {((submitCount > 0 && errors[field.name]))
        && (
        <div className="error fs-12">
          {errors[field.name]}
        </div>
        )
      } */}
    </div>
  );
};

const ReactSelect = (props) => {
  const {
    name,
    options,
    placeholder,
    isMulti,
    isDisabled,
    isSearchable,
    className,
    errorLabel,
    label,
    touched,
    customId,
    customLabel,
    onChangeOption,
    onScrollToButtom,
    onScrollToTop,
    defaultValue,
    onChangeNameOption,
    clear,
    setClear
  } = props;
  return (
    <div>
      <Field
        name={name}
        component={RenderSelectInput}
        options={options}
        touched={touched}
        placeholder={placeholder}
        isMulti={isMulti}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        className={className}
        errorLabel={errorLabel}
        label={label}
        customLabel={customLabel}
        customId={customId}
        onChangeOption={onChangeOption}
        onScrollToButtom={onScrollToButtom}
        onScrollToTop={onScrollToTop}
        defaultValue={defaultValue}
        onChangeNameOption={onChangeNameOption}
        clear={clear}
        setClear={setClear}
      />
      <ErrorMessage name={name} />
    </div>
  );
};
export default ReactSelect;
