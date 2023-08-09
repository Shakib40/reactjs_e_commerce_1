import React from 'react';
import { Field } from 'formik';
import CreatableSelect from 'react-select/lib/Creatable';


const CustomInputComponent = (props) => {
  const {
    field, label, options, form: { setFieldValue }
  } = props;
  return (
    <div>
      {label && (
      <label className="fs-12 clr-input-box-label mb-0 background_color_transparant">
        {label}
      </label>
      )}
      <CreatableSelect
        classNamePrefix="reactSelect"
        name={field.name}
        options={options}
        value={field.value}
        onChange={(option) => { setFieldValue(field.name, option); }}
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
      />
    </div>
  );
};


const ReactCreatableSelect = (props) => {
  const {
    name,
    options,
    label
  } = props;
  return (
    <Field
      name={name}
      component={CustomInputComponent}
      options={options}
      label={label}
    />
  );
};

export default ReactCreatableSelect;
