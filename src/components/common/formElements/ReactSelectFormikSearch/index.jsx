import React from 'react';
import { Field } from 'formik';
import Select from 'react-select';
// import styles from './index.module.css';


const customStyles = {
  valueContainer: provided => ({
    ...provided,
    padding: '0px',
    marginLeft: '4px',
    borderRadius: '5px',
    position: 'static',
    height: '40px',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    display: 'none'
  }),
  multiValue: provided => ({
    ...provided,
    display: 'none',
    top: '58%'
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
    isLoading,
    label,
    form: { errors, setFieldValue, submitCount },
    customLabel,
    backspaceRemovesValue,
    inputValue,
    placeholder,
    customId,
    isDisabled,
    onChangeOption = () => { },
    inputChange = () => { },
    onScrollToButtom = () => { },
    onScrollToTop = () => { },
    className
  } = props;

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
        isLoading={isLoading}
        className={className}
        placeholder={placeholder}
        isDisabled={isDisabled}
        backspaceRemovesValue={backspaceRemovesValue}
        onInputChange={(data) => { inputChange(data); }}
        defaultValue={field.value}
        onChange={(option) => { setFieldValue(field.name, option); onChangeOption(option); }}
        isMulti={isMulti}
        onMenuScrollToBottom={() => { onScrollToButtom(); }}
        onMenuScrollToTop={() => { onScrollToTop(); }}
        width="100%"
        value={field.value}
        styles={customStyles}
        inputValue={inputValue}
        classNamePrefix="selectSearch"
        theme={theme => ({
          ...theme,
          borderRadius: '5px',
          borderWidth: '2px',
          borderColor: 'rgba(173, 0, 40, 0.25)',
          boxShadow: '0 0 0 0.2rem rgba(173, 0, 40, 0.25)',
          colors: {
            ...theme.colors,
            primary: 'rgba(173, 0, 40, 0.40)',
          },
        })}
      />
      {((submitCount > 0 && errors[field.name]))
        && (
        <div className="error fs-14">
          {errors[field.name]}
        </div>
        )
      }
    </div>
  );
};

const ReactSelect = (props) => {
  const {
    name,
    options,
    placeholder,
    backspaceRemovesValue,
    isMulti,
    isLoading,
    isDisabled,
    isSearchable,
    className,
    errorLabel,
    inputValue,
    label,
    touched,
    customId,
    customLabel,
    inputChange,
    onChangeOption,
    onScrollToButtom,
    onScrollToTop
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
        isLoading={isLoading}
        backspaceRemovesValue={backspaceRemovesValue}
        inputValue={inputValue}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        className={className}
        errorLabel={errorLabel}
        label={label}
        inputChange={inputChange}
        customLabel={customLabel}
        customId={customId}
        onChangeOption={onChangeOption}
        onScrollToButtom={onScrollToButtom}
        onScrollToTop={onScrollToTop}
      />
    </div>
  );
};
export default ReactSelect;
